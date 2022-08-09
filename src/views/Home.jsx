<Window>
  <View direction="column" align="center" justify="center">
    <Image
      height={80}
      src={
        "https://ame-miniapp-storybook.calindra.com.br/web/v0/static/media/amelogo.f121db0e.png"
      }
    />
    <View margin="lg" align="center" justify="center">
      <Text textAlign="center">Bem-vindo ao seu MiniApp</Text>
    </View>
    <View width="100%">
      <Button onClick={() => Ame.openFileSelector()} text={"select"} />
      <Button onClick={() => Ame.uploadFile()} text={"upload"} />
    </View>
  </View>
</Window>;
