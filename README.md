# myir_mstech

Ms.Techキックオフの自己紹介用に作成しました。

デザインやコードの書生き方等々気になるところも多くありますが、

卒業時はもう少しうまく作れるようになっていることを願って記録用としてUP。

＾＾＾＾＾＾＾＾＾＾＾＾＾＾＾＾＾＾＾＾＾＾＾＾＾＾＾＾＾＾＾＾＾＾

2023/3/1　vercelで画像が表示されない…。

→

解決：

①import imgUrl from './img.png'を追加

②npm run build,npm run preview　で確認

③npm install

結果：②だけだとvercelでError: Command "npm run build" exited with 1

　　　が出たので③をした後にエラーなしで画像が表示されました。
   
　　　ビルドあたりはまだ理解不足です。

