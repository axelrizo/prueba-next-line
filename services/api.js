import { baseAuth } from './base/base.auth.instance'

export default function ({ store, $axios }, inject) {
  const base = {
    auth: baseAuth({ store, $axios }),
  }

  const api = {
    base,
  }

  inject('api', api)
}
