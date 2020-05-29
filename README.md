# DenoDeNode
## DDDの構成サンプル
- DomainModels: ドメインモデルの定義
- DomainServices: ドメインサービス
- UseCases: ユースケース、アプリケーションサービス
- Repositories: infrastructureとの接続
- infrastructure: DBの設定

## restfulサーバ
```
deno run --allow-net  main.ts
```

```
curl --location --request POST 'http://localhost:8008/orders/cancel' \
--header 'Content-Type: application/json' \
--data-raw '{
	"orderId": 1
}'
```
みたいにapi叩ける