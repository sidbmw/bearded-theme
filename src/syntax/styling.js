export default function (theme) {
  let css = [
    {
      name: "azdazd",
      scope: ["entity.name.tag.reference.scss"],
      settings: {
        foreground: theme.orange,
      },
    },
    {
      name: "[CSS] - pseudo",
      scope: ["entity.other.attribute-name.pseudo-class.css", "entity.other.attribute-name.pseudo-element.css"],
      settings: {
        foreground: theme.red,
      },
    },
    {
      name: "[CSS] - Class",
      scope: [
        "entity.other.attribute-name.parent-selector-suffix.css punctuation",
        "entity.other.attribute-name.class",
        "meta.property-list.scss",
        "entity.other.attribute-name.class",
      ],
      settings: {
        foreground: theme.turquoize,
      },
    },

    {
      name: "[CSS] - ID Selector",
      scope: ["entity.other.attribute-name.id"],
      settings: {
        foreground: theme.purple,
      },
    },
    {
      name: "[CSS] - Support",
      scope: [
        "source.css support",
        "source.css entity.name.tag",
        "source.css meta.property-list.css entity.name.tag.css",
        "source.css.scss meta.property-list.scss entity.name.tag.css",
        "support.type.property-name",
      ],
      settings: {
        foreground: theme.default,
      },
    },
    {
      name: "[CSS] - Constant",
      scope: [
        "source.css constant",
        "source.css support.constant",
        "constant.numeric.css keyword",
        "entity.name.function.scss",
      ],
      settings: {
        foreground: theme.blue,
      },
    },
  ];

  return Object.assign([].concat(css));
}
