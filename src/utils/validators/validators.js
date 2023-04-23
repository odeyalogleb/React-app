export const required = (values) => {
    if (values) return undefined

    return "This field is required!"
}

export const maxLength = (length) => (values) => {
    if (values &&  values.length > length) return "Max length is " + length + "!"

    return undefined;
}