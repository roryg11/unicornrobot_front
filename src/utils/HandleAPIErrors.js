let errorMsgs = ["An error has a occurred. Please try again, or contact your administrator"];
let json;

const HandleAPIErrors = {
  formatErrors: function (res){
    let errorMsgs = [];
    // do some sort of error management here so that the UI doesn't throw errors
    json = JSON.parse(res.text);
    if(json){
      if(json.errors){
        errorMsgs = json.errors;
      } else if (json.error){
        errorMsgs = [json.error];
      }
    }
    return errorMsgs;
  }
}


export default HandleAPIErrors;
