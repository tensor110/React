import { useForm, useFieldArray, FieldErrors } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useEffect } from "react";

type formValues = {
  username: string;
  email: string;
  channel: string;
  // Nested Objects 
  social:{
    twitter: string,
    facebook: string
  },
  // Arrays 
  phoneNumbers: string[]
  // Dynamic Field 
  phNumbers: {
    number: string
  }[],
  // Numeric and Date values 
  age: number,
  dob: Date
};

const Form = () => {
  const form = useForm<formValues>({
    defaultValues:{
      username: "user@123",
      email: "",
      channel: '',
      social:{
        twitter: '',
        facebook: ''
      },
      phoneNumbers: ["", ""],
      phNumbers: [{number: ""}],
      age: 0,
      dob: new Date()
    },
    // Validation Mode 
    mode: 'onBlur'
  });
  const { register, control, handleSubmit, formState, watch, getValues, setValue, reset, trigger } = form;
  const { errors, touchedFields, dirtyFields, isDirty, isValid, isSubmitting, isSubmitSuccessful } = formState;
  console.log({touchedFields, dirtyFields})

  const {fields, append, remove} = useFieldArray({
    name: 'phNumbers',
    control
  })

  // Handle on submit 
  const onSubmit = (data: formValues) => {
    console.log("Form Submitted", data);
  };
  // Handle submit error 
  const onError = (errors: FieldErrors<formValues>) =>{
    console.log("Form Error", errors)
  }

  // Watch field values 
  useEffect(()=>{
    const subscription = watch((value)=>{
      console.log(value)
    })
    return () => subscription.unsubscribe()
  }, [watch])
  const watchForm = watch()

  // Get Field Values 
  const handleGetValues = () =>{
    console.log("Get Vlues", getValues(["username", "channel"]))
  }

  // Set Field Value 
  const handleSetValue = () =>{
    setValue('username', "",{
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true
    })
  }

  // Reset form on successful submit 
  useEffect(()=>{
    if(isSubmitSuccessful){
      reset()
    }
  }, [isSubmitSuccessful, reset])

  return (
    <div className="hook-form">
      <h1>React Hook Form</h1>
      <h2>{JSON.stringify(watchForm)}</h2>
      <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
        <div className="form-control">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            {...register("username", {
              required: {
                value: true,
                message: "Username is required",
              },
            })}
          />
          <p className="error">{errors.username?.message}</p>
        </div>

        <div className="form-control">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required:{
                value: true,
                message: "Email is required"
              },
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "Invalid email format",
              },
              // Custom Validation 
              validate: {
                notAdmin: (fieldValue) =>{
                  return(
                    fieldValue !== 'admin@gmail.com' || "Enter a different email address"
                  )
                },
                notBlackListed: (fieldValue)=>{
                  return(
                    !fieldValue.endsWith("baddomain.com") || "This domain is not supported"
                  )
                },
                // Async Validation 
                // emailAvailable: async (fieldValue)=>{
                //   const response = await fetch(`https://jsonplaceholder.typicode.com?email=${fieldValue}`)
                //   const data = await response.json()
                //   return data.length == 0 || "Email already exists"
                // }
              }
            })}
          />
          <p className="error">{errors.email?.message}</p>
        </div>

        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <input type="text" id="channel" {...register("channel", {
              required: {
                value: true,
                message: "Channel is required",
              },
            })} 
          />
          <p className="error">{errors.channel?.message}</p>
        </div>

        {/* Nested Objects  */}
        <div className="form-control">
          <label htmlFor="twitter">Twitter</label>
          <input type="text" id="twitter" {...register("social.twitter",{
            // Disabling Fields 
            disabled: watch('channel') === '',
            required: 'Enter twitter profile'
          })} />
        </div>
        <div className="form-control">
          <label htmlFor="facebook">Facebook</label>
          <input type="text" id="facebook" {...register("social.facebook")} />
        </div>

        {/* Arrays  */}
        <div className="form-control">
          <label htmlFor="primary-phone">Primary Phone Number</label>
          <input type="number" id="primary-phone" {...register("phoneNumbers.0")} />
        </div>
        <div className="form-control">
          <label htmlFor="secondary-phone">Secondary Phone Number</label>
          <input type="number" id="secondary-phone" {...register("phoneNumbers.1")} />
        </div>
        
        {/* Dynamic Fields  */}
        <div>
          <label htmlFor="">List of Phone Numbers</label>
          <div>
            {
              fields.map((field, index)=>{
                return (
                  <div className="form-control" key={field.id}>
                    <input type="text" {...register(`phNumbers.${index}.number` as const)} />
                    {
                      index>0 &&(
                        <button type="button" onClick={()=> remove(index)}>Remove</button>
                      )
                    }
                  </div>
                )
              })
            }
            <button type="button" onClick={()=> append({number: ''})}>Add Phone Number</button>
          </div>
        </div>

        {/* Numeric and Date Values  */}
        <div className="form-control">
          <label htmlFor="age">Age</label>
          <input type="number" id="age" {...register("age", {
              valueAsNumber: true,
              required: {
                value: true,
                message: "Age is required",
              },
            })} 
          />
          <p className="error">{errors.age?.message}</p>
        </div>
        <div className="form-control">
          <label htmlFor="dob">Date of Birth</label>
          <input type="date" id="dob" {...register("dob", {
              valueAsDate: true,
              required: {
                value: true,
                message: "DOB is required",
              },
            })} 
          />
          <p className="error">{errors.dob?.message}</p>
        </div>

        <button disabled={!isDirty || isSubmitting}>Submit</button>
        <button type="button" onClick={() => reset()}>Reset</button>
        <button type="button" onClick={handleGetValues}>Get Values</button>
        <button type="button" onClick={handleSetValue}>Set Value</button>
        {/* Manually trigger validation  */}
        <button type="button" onClick={() => trigger()}>Validate</button>
      </form>
      <DevTool control={control} />
    </div>
  );
};
export default Form;
