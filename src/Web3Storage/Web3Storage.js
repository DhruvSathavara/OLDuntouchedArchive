import React, { useEffect, useState } from "react";
// import { Web3Storage } from "web3.storage";
import { Web3Storage } from 'web3.storage/dist/bundle.esm.min.js'
import { createContext } from "react";
// export default function App() {

//     const [fileupload, setFileupload] = useState();

//     async function Web3StorageEx(e) {

//         const client = new Web3Storage({ token: process.env.WEB3STORAGE_TOKEN })

//         const fileInput = document.querySelector('input[type="file"]')
//         // Whenever we 'put' any data in web3storage it will return us content ID, so here we have content ID in const "rootCid";
//         const rootCid = await client.put(fileInput.files)
//         console.log(rootCid, "root content id...")




//         // const metadata  = JSON.stringify(client.put {
//         //   name: 'dhruv',
//         //   description: 'This is in IPSF storage via NFT storage !',
//         //   Examine: 'By Dhruv',
//         // })

//         // Fetch and verify files from web3.storage
//         const res = await client.get(rootCid)
//         const files = await res.files()
//         // console.log(files);

//         let url = URL.createObjectURL(files[0])
//         console.log(url)

//         setFileupload(url)

//         console.log(files.file.cid);
//         for (const file of files) {
//             console.log(`${file.cid},${file.name}`)
//         }
//     }
//     return (
//         <div className="App">
//             <h1>Web3Storage - Example</h1>
//             <div>
//                 <input type="file" id="input" onChange={Web3StorageEx} />
//                 {
//                     fileupload && (
//                         <img src={fileupload} width="200px" />
//                     )
//                 }
//             </div>
//         </div>
//     )

// }


export const APIcontext = createContext()
function StorageWeb3(props) {
    const [client, setClient] = useState([])

    useEffect(() => {
        async function Storage3() {

            const client = new Web3Storage({ token: process.env.WEB3STORAGE_TOKEN })
            setClient(client);
        }
        Storage3()
    }, [])
    return (
        <APIcontext.Provider value={{ client: client, ...props }}>
            {props.children}
        </APIcontext.Provider>
    )

}


export default StorageWeb3;