import React from 'react'
import { ReactDOM, render } from 'react-dom';
import './Filtros_profissoes.css'

export const Filtros_profissoes = () => {
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        setChecked(!checked);
    };

    

  return (
    <div className='row'>
        <div className='col-sm-6'>
            <div className='reportgroup reportgroup-occinfo mb-5'>
                <h2 className='r-group-header fs-4 pb-2'>Informações específicas do cargo</h2>
                <div className='pb-2'>
                    <h3 className='form-check form-switch h5 m-0 pb-1'></h3>
                    <input
                        type="checkbox"
                        checked={checked}
                        onChange={handleChange}/>
                    <label>Tarefas</label>
                </div>
                <div id='details-check' style={{paddingLeft: '3.25em', display: checked ? 'block': 'none'}}>
                    <p>Blablabla</p>
                    <p>Blablabla</p>
                    <p>Blablabla</p>
                </div>
                <div className='pb-2'>
                    <h3 className='form-check form-switch h5 m-0 pb-1'></h3>
                    <input className='form-check-input h6' type='checkbox'/>
                    <label>Trem</label>
                </div>
                <div className='pb-2'>
                    <h3 className='form-check form-switch h5 m-0 pb-1'></h3>
                    <input className='form-check-input h6' type='checkbox'/>
                    <label>Tecnologias utilizadas</label>
                </div>
            </div>
        </div>
        <div className='col-sm-6'>
            <div className='reportgroup reportgroup-occinfo mb-5'>
                <h2 className='r-group-header fs-4 pb-2'>Informações específicas do cargo</h2>
                <div className='pb-2'>
                    <h3 className='form-check form-switch h5 m-0 pb-1'></h3>
                    <input className='form-check-input h6' type='checkbox'/>
                    <label>Tarefas</label>
                </div>
                <div className='pb-2'>
                    <h3 className='form-check form-switch h5 m-0 pb-1'></h3>
                    <input className='form-check-input h6' type='checkbox'/>
                    <label>Trem2</label>
                </div>
                <div className='pb-2'>
                    <h3 className='form-check form-switch h5 m-0 pb-1'></h3>
                    <input className='form-check-input h6' type='checkbox'/>
                    <label>Tecnologias utilizadas</label>
                </div>
            </div>
        </div>
    </div>
    // <Container>
    //     <Row>
    //         <Col>
    //         </Col>
    //     </Row>
    // </Container>
  )
}
