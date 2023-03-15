import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const ComponentEditor = ({content, onChange})=>{
    return(
        <CKEditor
            editor={ ClassicEditor }
            data={content}
            onChange={ ( event, editor ) => onChange(editor.getData())}
        />
    )
}

export default ComponentEditor;