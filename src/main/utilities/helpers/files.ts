const MAX_FILE_SIZE = 5 * 1025 * 1024;

export const confirmSize = (bytes: number): boolean => {
    const size = (bytes / 1024) * 1024;

    if (size > MAX_FILE_SIZE) {
        throw "File cannot be larger than 5mb";
    }

    return true;
};
