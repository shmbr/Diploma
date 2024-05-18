const Theme = () => {
  const Palette = () => (
    <div>
      <Color hex="#3a4f41" />
      <Color hex="#cacf85" />
      <Color hex="#8cba80" />
      <Color hex="#f25f5c" />
      <Color hex="#f95738" />
    </div>
  );

  const Color = ({ hex }: { hex: string }) => (
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
