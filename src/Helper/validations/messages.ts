const errorMessages = {
    required: (field: string) => `${field} is required`,
    minLengthString: (field: string, length: number) =>
        `${field} must contain at least ${length} characters/digits`,
    maxLengthString: (field: string, length: number) =>
        `${field} must contain not more than ${length} characters/digits`,
    validType: (type: string) => `please provide a valid ${type}`,
    greaterThan: (field: string, value: number) =>
        `${field} should have a value greater than ${value}`
};

const onConfirmMessages = {
    confirmAction: (field: string, action: string) => `Are you sure, you want to ${action} ${field}?`,
    confirmLogout: 'Are you sure, you want to logout?'
};

export { errorMessages, onConfirmMessages };
