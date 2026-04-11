import React from 'react'

const PageTitle = ({ children, title, subtitle }) => {
    return (
        <div>
            <div className='flex gap-4 items-center'>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAlFJREFUWEfVmLtKA0EUhg1iETD2ETtJbATFlHaxtLFSMAHB0sZOsPLSCGkkCj5BougrCNamWBMrQ6JdRDshEawk4pn9zcwwl911i9k0k90zc+afb8+cuaTG9L+hb0oZ6sRhMvZj6txZgSSsXNokOrX6JShhMBAelZ7gx9AP+VcRTJbAp3abRuJ5D1RixMAHe1Ccsh/ZvwzNStAlgcKnDUsmKEFdvUH/k0ydbkeIeZ5gMgViZP8lhPaZqUmlq8gEEyOQi41YYBYKS+RHBhA6BhXo3RKIvPV1dxSLMDhJFw/or0wyNEFnBWIN7jevBXKZxXXhedC6MZLV1Z/4YCuUTBJAsKJo82DiBILE7doyjfzq+Z3Kau1ESdBWP3aCtg5llbb6EQSO+0vdBvVVq7PY6zfZfhAdbs/PClpsBHX1RwKP/dm8QKXnPfr+vyn8uBhMuEBbErw/rAaKTZAb5cOYCDogEBLMn9omVGcPSw5+FDtq9wRqjpfhhO6W9wV4F+dbSpjpIou5fI5lg073RZi1cqNfgokRqPvsNIB8Li+NOFo0jsiJZw+dN56gmwKzjSERWjkrkUDuJsGPFUYu7p+879MSdF4glEPo9E6BXmFfhthDPZzKdIepoHZ532eKQbI5L5AbAcVktsGyT6Y8589eNutwN4ObB/lQFdZuI6m9m3FZIGBK+e8vb5EdpzEFAWpns9vuBXU5j49VtwRWeiwf7s2ob4UrPRaTMdiNN7VcP+KO2lmBEIZve/oqZqS3FnuurLISdrxH7bB2tJP9yPkw5brAHy6QY3VmdklZAAAAAElFTkSuQmCC" alt="icon" />
                <h1 className='font-bold'>{title}</h1>
            </div>
            <p className='mt-4'>{subtitle}</p>

            {children}
        </div>
    )
}

export default PageTitle