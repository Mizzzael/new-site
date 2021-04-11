import Base64 from '~/assets/js/Base64.js'
import { token } from '~/.env.json'

export default function ({ $axios }) {
    $axios.defaults.headers.common.Authorization = `Bearer ${Base64.decode(
        token
    )}`
    $axios.defaults.headers.common['Content-Type'] = `application/json`
}
