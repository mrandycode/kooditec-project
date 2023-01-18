import { config } from '../config/config'

export default Object.freeze({
    EMAIL_SCANME: {
        host: config.hostEmail,
        port: config.portUpload,
        path: '/api-send-mail-rest/resume',
        method: 'PATCH',
        headers: {
            'api-key': config.apiKey,
            'Content-Type': 'application/json',
        },
    },
    UPLOAD_RESUME: {
        host: config.hostEmail,
        port: config.portUpload,
        path: '/api-upload-rest/resume',
        method: 'PATCH',
        headers: {
            'api-key': config.apiKey,
            'Content-Type': 'application/json',
        },
    },
})
