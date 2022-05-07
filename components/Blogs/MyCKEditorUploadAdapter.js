import { Component } from 'react'

export default class MyCKEditorUploadAdapter extends Component {
  constructor (props) {
    super(props)
    this.loader = props.loader
  }
  // Starts the upload process.
  upload () {
    return this.loader.file.then(
      async file =>
        new Promise((resolve, reject) => {
          console.log(file)
          const formData = new FormData()
          formData.append('file', file)

          fetch('http://localhost:5000/api/posts/uploadfiles', {
            method: 'POST',
            body: formData
            // headers: {
            //   'content-type': 'multipart/form-data'
            // }
          })
            .then(res => res.json())
            .then(data => {
              console.log(data)
              resolve({ url: 'http://localhost:5000/' + data.url })
            })
          // resolve({ url: URL.createObjectURL(file)  })
          console.log(file)
          console.log('reached here')
        })
    )
  }
}
