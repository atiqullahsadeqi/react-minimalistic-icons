const fs = require('fs');
const path = require('path');

const ICONS_DIR = path.join(__dirname, '../icons');
const DIST_DIR = path.join(__dirname, '../dist');

// Create dist directory
if (!fs.existsSync(DIST_DIR)) {
  fs.mkdirSync(DIST_DIR, { recursive: true });
}

// Convert SVG to React component
function svgToReactComponent(svgContent, componentName) {
  // Clean up SVG content
  const cleanSvg = svgContent
    .replace(/width="24"/g, 'width={size}')
    .replace(/height="24"/g, 'height={size}')
    .replace(/stroke="#292D32"/g, 'stroke={color}')
    .replace(/fill="#292D32"/g, 'fill={color}')
    .replace(/fill="none"/g, 'fill="none"')
    .replace(/<svg/, '<svg {...props}')
    .replace(/stroke-width/g, 'strokeWidth')
    .replace(/stroke-linecap/g, 'strokeLinecap')
    .replace(/stroke-linejoin/g, 'strokeLinejoin')
    .replace(/stroke-miterlimit/g, 'strokeMiterlimit');

  return `import React from 'react';

export interface ${componentName}Props {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const ${componentName}: React.FC<${componentName}Props> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    ${cleanSvg}
  );
};

export default ${componentName};
`;
}

// Convert kebab-case to PascalCase
function toPascalCase(str) {
  return str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

// Get all icon variants
function getIconVariants(iconPath) {
  const variants = {};
  const files = fs.readdirSync(iconPath);
  
  files.forEach(file => {
    if (file.endsWith('.svg')) {
      const variant = file.replace('.svg', '').split('-').pop();
      const svgContent = fs.readFileSync(path.join(iconPath, file), 'utf8');
      variants[variant] = svgContent;
    }
  });
  
  return variants;
}

// Build all icons
function buildIcons() {
  const categories = fs.readdirSync(ICONS_DIR);
  const allExports = [];
  const categoryExports = {};

  categories.forEach(category => {
    const categoryPath = path.join(ICONS_DIR, category);
    if (!fs.statSync(categoryPath).isDirectory()) return;

    const icons = fs.readdirSync(categoryPath);
    const categoryComponents = [];

    icons.forEach(iconName => {
      const iconPath = path.join(categoryPath, iconName);
      if (!fs.statSync(iconPath).isDirectory()) return;

      const variants = getIconVariants(iconPath);
      
      Object.entries(variants).forEach(([variant, svgContent]) => {
        const componentName = toPascalCase(`${iconName}-${variant}`);
        const component = svgToReactComponent(svgContent, componentName);
        
        // Write individual component file
        const componentDir = path.join(DIST_DIR, category);
        if (!fs.existsSync(componentDir)) {
          fs.mkdirSync(componentDir, { recursive: true });
        }
        
        fs.writeFileSync(
          path.join(componentDir, `${componentName}.tsx`),
          component
        );

        categoryComponents.push(componentName);
        allExports.push(`export { default as ${componentName} } from './${category}/${componentName}';`);
      });
    });

    categoryExports[category] = categoryComponents;
  });

  // Create main index file
  const indexContent = `${allExports.join('\n')}

// Category exports
${Object.entries(categoryExports).map(([category, components]) => 
  `export const ${toPascalCase(category)} = {\n${components.map(comp => `  ${comp}`).join(',\n')}\n};`
).join('\n\n')}
`;

  fs.writeFileSync(path.join(DIST_DIR, 'index.ts'), indexContent);

  // Create TypeScript declaration file
  const dtsContent = `import React from 'react';

export interface IconProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

${allExports.map(exp => exp.replace('export { default as', 'export declare const').replace('} from', ': React.FC<IconProps>;')).join('\n')}
`;

  fs.writeFileSync(path.join(DIST_DIR, 'index.d.ts'), dtsContent);

  console.log(`✅ Built ${allExports.length} icon components`);
  console.log(`📁 Categories: ${Object.keys(categoryExports).join(', ')}`);
}

buildIcons();
