import React from 'react';
import { useRedirect } from '../../hooks/Redirect';

const Pages = ({scenes}) => {
    useRedirect("loggedOut");
    const pages = scenes.map((scene) => (
        parseFloat(scene.pages)));

    function addpages(page) {
    return page > 0;
    }

    const pagenumbers = pages.filter(addpages);

    const pagestotal = pagenumbers.reduce((total, a) => total + a, 0);

  return (
    <div>
        <p className='ml-3'>
        Pages {pagestotal}
        </p>
         </div>
  )
}

export default Pages