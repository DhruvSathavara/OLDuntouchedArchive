import React, { useContext, useState } from "react";
import { APIcontext } from "../Web3Storage/Web3Storage";
function UploadForm() {

    const client=useContext(APIcontext);
    console.log(client);
    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [category, setCategory] = useState(null);
    const [file, setFile] = useState(null);
    const [website, setWebsite] = useState('');
    const [description, setDescription] = useState('');
    const [checkbox, setCheckbox] = useState();

    const nameEvent = (e) => {
        setName(e.target.value)
    }
    console.log(name);

    const subjectEvent = (e) => {
        setSubject(e.target.value || null)
    }
    console.log(subject);

    const categoryEvent = (e) => {
        setCategory(e.target.value)
    }
    console.log(category);

    const websiteEvent = (e) => {
        setWebsite(e.target.value)
    }
    console.log(website);

    const descriptionEvent = (e) => {
        setDescription(e.target.value)
    }
    console.log(description);

    const fileEvent = (e) => {
        setFile(e.target.files[0])
    }
    console.log(file);

    const checkboxEvent = (e) => {
        setCheckbox(e.target.checked)
    }
    console.log(checkbox);

    let Item = {
        nam: name,
        subject: subject,
        category: category,
        file: file,
        website: website,
        description: description,
        checkbox: checkbox
    }
    console.log(Item);

    function onFormSubmit(e) {
        e.preventDefault()
        console.log(Item,'form submit');

        setName('');
        setSubject('');
        setCategory(null);
        setFile(null);
        setWebsite('');
        setDescription('');
        setCheckbox();
    }
    // function getAccessToken (){
    //     return process.env.WEB3STORAGE_TOKEN
    // }
    // function makeStorageClient () {
    //     return new Web3Storage({ token: getAccessToken() })
    // }
    // function getFiles () {
    //     const fileInput = document.querySelector('input[type="file"]')
    //     return fileInput.files
    // }
    // async function storeFiles (files) {
    //     const client = makeStorageClient()
    //     const cid = await client.put(files)
    //     console.log('stored files with cid:', cid)
    //     return cid
    // }


    return (
        <div style={{ backgroundColor: "aliceblue" }} className="col">
            <div className="form-style-2 offset-4 row-8">
                <div className="form-style-2-heading">Upload any files from here</div>
                <form action="" method="" onSubmit={onFormSubmit} >
                    <label for="field1"><span>Name <span className="required">*</span></span><input value={name} onChange={nameEvent} placeholder="Your name" type="text" class="input-field" name="field1" /></label>

                    <label for="field2"><span>Subject <span className="required">*</span></span><input value={subject} placeholder="Subject" onChange={subjectEvent} type="text" class="input-field" name="field2" /></label>

                    <label for="field4"><span>Category</span><select value={category || null} name="field4" onChange={categoryEvent} className="select-field">
                        <option value="Book">Book</option>
                        <option value="Documents">Documents</option>
                        <option value="Newspaper">Newspaper</option>
                        <option value="Website / Snapshot">Website / Snapshot</option>
                    </select></label>

                    {

                    }
                    <label for="field6"><span>Choose file</span><input className="file-input" value={undefined} onChange={fileEvent} type="file"></input></label>

                    <label for="field7"><span>Add website</span><input value={website} className="add-url" placeholder="add URL" onChange={websiteEvent} type="url"></input></label>

                    <label for="field5"><span>Description</span><textarea value={description} onChange={descriptionEvent} name="field5" className="textarea-field"></textarea></label>

                    <label><input className="terms-checkbox" value={checkbox} onChange={checkboxEvent} type="checkbox"></input>I agree to terms and conditions.</label>

                    <label><span> </span><input type="submit" value="Submit" /></label>
                </form>
            </div>
        </div>

    )
}

export default UploadForm;