# nun1 aik2 pmcp font【十光島集倉字】

![](./sample.png)

pbm cxz tdnl kh aeiuo 01234 56789 .,?!-"  
pi, mak-mak doktit nuwaxecleti "zo"? hjabet!

Available in [TTF](https://github.com/sozysozbot/nun1_aik2_pmcp_font/blob/master/fonts/gy1bet2.ttf) and [WOFF](https://github.com/sozysozbot/nun1_aik2_pmcp_font/blob/master/fonts/gy1bet2.woff).

## ビルド方法

```shell
npm install
npx tsc
node to_segment_svgs.js # セグメントディスプレイ情報を SVG に変換して glyphs/ 直下に
node to_font.js
```

## ファイル構成

template.svg にある seg1, seg2, ..., seg10 を、 to_segment_svgs.ts にあるオンオフ情報に基づいて適宜消すことによって glyphs/ フォルダの中にグリフが生える。
