## Directory Tour

We are using a variation of [React Atomic Design](https://github.com/danilowoz/react-atomic-design) for the organization of components.

### Atoms

Atoms are the smallest possible components, such as buttons, titles, inputs or event color pallets, animations, and fonts. They can be applied on any context, globally or within other components and templates, besides having many states, such as this example of button: disabled, hover, different sizes, etc.

- Buttons
- Dropdowns
- Titles

### Molecules

They are the composition of one or more components of atoms. Here we begin to compose complex components and reuse some of those components. Molecules can have their own properties and create functionalities by using atoms, which don’t have any function or action by themselves.

- Product Cards
- Story Cards

### Organisms

Organisms are the combination of molecules that work together or even with atoms that compose more elaborate interfaces. At this level, the components begin to have the final shape, but they are still ensured to be independent, portable and reusable enough to be reusable in any content.

- May have a data-layer
- List of Products
- Category & Subcategory carousel

### Templates

The templates create relationships between the organisms and others components through positions, placements and patterns of the pages but it doesn’t have any style, color or component rendered. Think of this like a wire frame.

- FixedTopAndBottom
- Carousel
- Modal shell
- Infinite scroll

### Containers

Containers are non-display components which only represent the data or logic layer for an app or an app. This can be an Apollo query, a Redux connect, or a recompose branch.

### Screens

Actual screen for the app, which can kind of be considered pages, except for the fact that it will also include modals, side drawers, light boxes.

- Modals
- Drawers
- Pop Ups
- Shadow Boxes
- Pages
