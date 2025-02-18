export type ResourceType = 'require' | 'require-css' | 'resource';

export interface Resource {
    id: number
    url: string
    content: string
    base64: string
    hash: ResourceHash
    type?: ResourceType
    contentType: string
    createtime?: number
    updatetime?: number
}

export interface ResourceHash {
    md5: string
    sha1: string
    sha256: string
    sha384: string
    sha512: string
}

export interface ResourceLink {
    id: number
    url: string
    scriptId: number
    createtime?: number
}
