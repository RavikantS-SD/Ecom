import passwordValidator from "password-validator"
var schema = new passwordValidator()
schema
    .is().min(8)                                    // Minimum length 8
    .is().max(100)                                  // Maximum length 100
    .has().uppercase(1)                             // Must have uppercase letters
    .has().lowercase(1)                             // Must have lowercase letters
    .has().digits(1)                                // Must have at least 1 digits
    .has().not().spaces()                           // Should not have spaces
    .is().not().oneOf(['Passw0rd', 'Password123']); // Blacklist these values

export default function formValidator(event) {
    let { name, value } = event.target
    switch (name){
        case "name":
        case "username":
        case "color":
            if(value.length === 0)
                return name + "field is Mandatory"
            else if(value.length < 10 || value > 100)
                return name + "Length must be 10-100 Characters"
            else
            return ""

        case "email":
            if(value.length === 0)
                return name + "field is Mandatory"
            else if(value.length < 3 || value > 50)
                return name + "Length must be 3-50 Characters"
            else
            return ""

        case "password":
            if(value.length === 0)
                return name + "field is Mandatory"
            else if(!(schema.validate(value)))
                return "Invalid Password. It Must Contain 8-100 Character, atleast 1 digit, 1 upper case charactor, 1 lower case character"
            else
            return ""

        case "size":
            if(value.length === 0)
                return name + "field is Mandatory"
            else if(value.length > 10)
                return name + "Length must be Less Than 10 Characters"
            else
            return ""

        case "phone":
            if(value.length === 0)
                return name + "field is Mandatory"
            else if(value.length > 10 && value.length < 10)
                return name + "Length must be 10"
            else if(value.startsWith("6") || value.startsWith("7") || value.startsWith("8") || value.startsWith("9"))
                return ""
            else
            return "Invalid Phone Number"

        case "basePrice":
            if(value.length === 0)
                return name + "field is Mandatory"
            else if(value < 1)
                return "Base Price Must be Greater than 0"
            else
            return ""

        case "discount":
            if(value.length === 0)
                return name + "field is Mandatory"
            else if(value < 0 || value > 100)
                return "Discount Must be 0-100"
            else
            return ""

        case "quantity":
            if(value.length === 0)
                return name + "field is Mandatory"
            else if(value < 0)
                return "Quantity must be greater than or equal to 0"
            else
            return ""

        case "message":
            if(value.length === 0)
                return name + "field is Mandatory"
            else if(value.length < 50)
                return name + "Length must be Greater then or equal to 50 Characters"
            else
            return ""
        default:
            return ""
    }
}
