const Theme = () => {
  const Palette = () => (
    <div>
      <Color name="Feldgrau" hex="#3a4f41" r="58" g="79" b="65" />
      <Color name="Citron" hex="#cacf85" r="202" g="207" b="133" />
      <Color name="Olivine" hex="#8cba80" r="140" g="186" b="128" />
      <Color name="Bittersweet" hex="#f25f5c" r="242" g="95" b="92" />
      <Color name="Tomato" hex="#f95738" r="249" g="87" b="56" />
    </div>
  );

  const Color = ({ name, hex, r, g, b }) => (
    <div
      style={{
        backgroundColor: hex,
        minHeight: 50,
        padding: 20,
        margin: 20,
      }}
    />
  );

  return (
    <div>
      Palette
      <Palette />
    </div>
  );
};

export default Theme;
