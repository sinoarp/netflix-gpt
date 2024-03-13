

export const checkValidData = (name , email , password) => {
    const isNameValid = name===false ? true : /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isNameValid) return "Name is not Valid";
    if(!isEmailValid) return "Email ID is not valid.";
    if(!isPasswordValid) return "Password is not Valid";

    return null;
}