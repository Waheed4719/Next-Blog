import React, { useState, useRef, useEffect } from 'react'
import { CONFIG } from '../../../components/Blogs/CKeditorConfig'
import MyCKEditorUploadAdapter from '../../../components/Blogs/MyCKEditorUploadAdapter'
import Layout from '../../../components/Dashboard/Layout'

function CreatePost () {
  const editor = useRef(null)
  const editorRef = useRef()
  const [editorLoaded, setEditorLoaded] = useState(false)
  const { CKEditor, ClassicEditor } = editorRef.current || {}
  const [initialLoad, setInitialLoad] = useState(true)
  const [editorValue, setEditorValue] = useState({
    value: '',
    message: ''
  })

  const loadCkEditor = () => {
    editorRef.current = {
      CKEditor: require('@ckeditor/ckeditor5-react').CKEditor,
      ClassicEditor: require('@dmc4719/ckeditor5-custom-build/build/ckeditor')
    }
    setEditorLoaded(true)
  }

  useEffect(() => {
    loadCkEditor()
  }, [])
  return (
    <>
      <div className='w-full mx-auto p-6 '>
        <h2 className='text-2xl mb-2'>Create Blog</h2>
        <div className='flex items-center gap-4'>
          <p className=''>
            Proident dolor nisi duis ullamco ipsum voluptate amet reprehenderit
            consequat. Irure nisi est aute ullamco veniam quis in eu minim
            exercitation mollit exercitation minim aute. Ullamco eu nisi fugiat
            Lorem sunt cupidatat veniam minim velit eiusmod velit nisi sint
            amet.
          </p>
          <button className='text-sm border-2 border-transparent bg-sky-500 text-white py-2 px-4 rounded-md'>
            Preview
          </button>
        </div>
        <h3 className='text-md mt-4 text-gray-500'>Upload featured image</h3>
        <div className='dropImage border-sky-500 border-dashed border-2 h-60 rounded-md flex items-center justify-center mt-2 flex-col'>
          <div className='bg-gray-400 h-12 w-12 rounded-md mb-2'></div>
          <p className='text-md text-gray-700'>
            Drop your images here or <span>Browse</span>
          </p>
          <p className='text-sm text-gray-500'>
            Max size 5mb supported, formats: .png, jpg
          </p>
        </div>
        <div className='mt-4'>
          <h3 className='text-md mt-4 text-gray-500'>Blog Title</h3>
          <input className='px-4 border-2 outline-0 focus:border-sky-500 hover:border-sky-500 h-12 w-full rounded-md mt-2' />
        </div>
        <div className='editor my-4'>
          {editorLoaded ? (
            <CKEditor
              ref={editor}
              config={CONFIG}
              editor={ClassicEditor}
              data='<p>Hello from CKEditor 5!</p>'
              onReady={editor => {
                //   editor.config.contentsCss = '/createBlog.css'
                editor.plugins.get(
                  'FileRepository'
                ).createUploadAdapter = loader => {
                  return new MyCKEditorUploadAdapter({ loader })
                }
              }}
              onChange={(event, editor) => {
                const data = editor.getData()
                console.log({ event, editor, data })
              }}
            />
          ) : (
            <div>...Editor loading</div>
          )}
        </div>
        <div className='mt-4'>
          <h3 className='text-md mt-4 text-gray-500'>Video Url</h3>
          <input className='px-4 border-2 outline-0 focus:border-sky-500 hover:border-sky-500 h-12 w-full rounded-md mt-2' />
        </div>
        <div className='mt-4'>
          <h3 className='text-md mt-4 text-gray-500'>Reference Url</h3>
          <input className='px-4 border-2 outline-0 focus:border-sky-500 hover:border-sky-500 h-12 w-full rounded-md mt-2' />
        </div>
        <div className='mt-4 flex gap-4 justify-end items-center flex-wrap'>
          <button className='text-sm rounded-md border-2 border-sky-500 py-2 px-4'>
            Cancel
          </button>
          <button className='text-sm rounded-md border-2 border-sky-500 py-2 px-4'>
            Save as draft
          </button>
          <button className='text-sm rounded-md border-2 border-transparent bg-sky-500 py-2 px-4 text-white'>
            Publish
          </button>
        </div>
      </div>
    </>
  )
}

// const CreateWithAuth = withAuth(CreatePost)
CreatePost.getLayout = function getLayout (children) {
  return <Layout>{children}</Layout>
}

export default CreatePost
