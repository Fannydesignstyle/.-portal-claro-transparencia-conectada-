# Commit Message Convention

This project follows the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification to ensure consistent and meaningful commit messages across the codebase.

## Commit Message Format

Each commit message consists of a **type**, an **optional scope**, and a **subject**:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The **header** (first line) is mandatory. The **body** and **footer** are optional.

## Types

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `perf`: A code change that improves performance
- `test`: Adding missing tests or correcting existing tests
- `build`: Changes that affect the build system or external dependencies
- `ci`: Changes to our CI configuration files and scripts
- `chore`: Other changes that don't modify src or test files
- `revert`: Reverts a previous commit

## Scopes

Scopes should be the module or component affected by the change. Examples:
- `ai` - Artificial Intelligence module
- `app` - Main application module
- `components` - UI components
- `context` - React context providers
- `hooks` - Custom React hooks
- `lib` - Utility functions
- `schemas` - Zod schemas
- `flows` - Genkit flows

## Examples

### Feature
```
feat(ai): add sentiment analysis to proposal analyzer

Implement sentiment analysis in the analyzeProposalFlow to determine
the emotional tone of citizen proposals.

Closes #123
```

### Bug Fix
```
fix(components): resolve mobile menu not closing on item click

The mobile navigation menu was not closing when a menu item was clicked
due to missing event handler. Added the missing onClick handler to
dismiss the menu.

Fixes #456
```

### Documentation
```
docs(readme): update installation instructions

Add more detailed installation steps for different operating systems
and clarify the required dependencies.

Closes #789
```

### Refactor
```
refactor(hooks): optimize useIsMobile hook performance

Replace window.innerWidth check with matchMedia listener for better
performance and responsiveness.

BREAKING CHANGE: The hook no longer uses window.innerWidth directly
```

## Best Practices

1. Use the imperative, present tense: "change" not "changed" nor "changes"
2. Don't capitalize the first letter
3. No dot (.) at the end
4. Keep the subject line under 50 characters
5. Use the body to explain what and why vs. how
6. Reference issues and pull requests liberally after the first line