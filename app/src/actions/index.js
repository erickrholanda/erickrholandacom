export const INC_NUMBER = "INC_NUMBER";

export function incrementNumber(number) {
    const action = {
        type: INC_NUMBER,
        number
    }
    return action;
};