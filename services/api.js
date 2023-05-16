import { baseApi } from './base/base.service'

export default function ({ store, $axios }, inject) {
  const api = {
    base: baseApi({ store, $axios }),
  }

  inject('api', api)
}
