// eslint-disable-next-line @typescript-eslint/no-var-requires
import CoCartAPI from "@cocart/cocart-rest-api";


// write cocart config for typescript
export const CoCart = new CoCartAPI( {
  url: `${process.env.API_ENDPOINT}`,
  consumerKey: `${process.env.WP_WOOCOMMERCE_CONSUMER_KEY}`,
  consumerSecret: `${process.env.WP_WOOCOMMERCE_CONSUMER_SECRET}`,
} )





