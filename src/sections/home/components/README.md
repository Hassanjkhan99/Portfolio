# Home Components Structure

This directory contains all the components used in the home page, organized into logical subdirectories for better maintainability.

## 📁 Directory Structure

```
components/
├── hero/           # Hero section components
│   ├── index.ts
│   ├── HeroSection.tsx
│   ├── FloatingIcons.tsx
│   ├── GlowEffect.tsx
│   ├── ProfileAvatar.tsx
│   ├── HeroContent.tsx
│   ├── HeroActions.tsx
│   ├── EnhancedSocialIcon.tsx
│   └── EnhancedCTAButton.tsx
├── ui/             # Reusable UI components
│   ├── index.ts
│   ├── EnhancedButton.tsx
│   ├── SocialIcon.tsx
│   └── TypewriterText.tsx
├── effects/        # Visual effects and backgrounds
│   ├── index.ts
│   ├── AnimatedBackground.tsx
│   ├── ParticlesBackground.tsx
│   └── ConfettiEffect.tsx
├── tech-stack/     # Tech stack related components
│   ├── index.ts
│   ├── TechStackSection.tsx
│   └── SkillCard.tsx
├── index.ts        # Main index file (re-exports all)
└── README.md       # This file
```

## 🎯 Component Categories

### Hero Components (`hero/`)
All components related to the main hero section of the home page:
- **HeroSection**: Main container component
- **FloatingIcons**: Animated floating icons with mouse parallax
- **GlowEffect**: Background glow effects
- **ProfileAvatar**: Profile photo with orbiting particles
- **HeroContent**: Text content (name, title, description)
- **HeroActions**: CTA buttons and social links
- **EnhancedSocialIcon**: Social media icons with tooltips
- **EnhancedCTAButton**: Enhanced call-to-action buttons

### UI Components (`ui/`)
Reusable UI components that can be used across different sections:
- **EnhancedButton**: Base button component with variants
- **SocialIcon**: Social media icon component
- **TypewriterText**: Animated typewriter text effect

### Effects Components (`effects/`)
Visual effects and background components:
- **AnimatedBackground**: Animated background effects
- **ParticlesBackground**: Particle system background
- **ConfettiEffect**: Confetti animation effect

### Tech Stack Components (`tech-stack/`)
Components related to displaying technical skills and stack:
- **TechStackSection**: Main tech stack section
- **SkillCard**: Individual skill card component

## 📦 Importing Components

### From Main Index
```typescript
import { HeroSection, EnhancedButton, AnimatedBackground } from './home/components'
```

### From Specific Categories
```typescript
import { HeroSection } from './home/components/hero'
import { EnhancedButton } from './home/components/ui'
import { AnimatedBackground } from './home/components/effects'
```

## 🔧 Benefits of This Structure

1. **Better Organization**: Components are grouped by functionality
2. **Easier Navigation**: Clear separation of concerns
3. **Improved Maintainability**: Related components are together
4. **Scalability**: Easy to add new components to appropriate categories
5. **Reusability**: UI components can be easily reused across sections
6. **Clean Imports**: Index files provide clean import paths

## 🚀 Adding New Components

When adding new components:

1. **Hero-related**: Add to `hero/` directory
2. **Reusable UI**: Add to `ui/` directory  
3. **Visual effects**: Add to `effects/` directory
4. **Tech stack**: Add to `tech-stack/` directory
5. **Update index files**: Add exports to appropriate `index.ts` files
6. **Update imports**: Ensure all import paths are correct 