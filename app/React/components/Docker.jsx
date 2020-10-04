import React from 'react'

export default class Docker extends React.Component {

    copy = (elmt) => {
        var copyText = elmt.nextElementSibling
        var code = elmt.nextElementSibling.nextElementSibling

        copyText.select()
        copyText.setSelectionRange(0, 99999) /*For mobile devices*/

        document.execCommand("copy")
        code.classList.add('copied')
        setTimeout(function(){
            code.classList.remove('copied')
        }, 2000)
    }

    render() {

        return (
            <>
                <div id='copyDocker' className='column'>
                    <span onClick={ (e) => this.copy(e.target)}>Click to copy</span>
                    <input
                        value='docker pull quanticalsolutions/quantic'
                        readOnly={true}
                        type='text'
                        className='noHeight'
                    />
                    <code>
                        docker pull quanticalsolutions/quantic
                    </code>
                </div>
            </>
        )
    }
}