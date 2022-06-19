import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api'

export const Woocommerce = new WooCommerceRestApi({
  url: `${process.env.API_ENDPOINT}`,
  consumerKey: process.env.WP_WOOCOMMERCE_CONSUMER_KEY as string,
  consumerSecret: process.env.WP_WOOCOMMERCE_CONSUMER_SECRET as string,
  version: 'wc/v3',
})
