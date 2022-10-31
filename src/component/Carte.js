import React from 'react'

function Carte( ) {
    let etudiant = [{
        nom : 'hicham',
        prenom : 'mayat',
        image : 'logo192.png', },
        {
          nom : 'imane',
          prenom : 'imane',
          image : 'logo192.png',
        },
      
      ]
  return (
    etudiant.map(element =>(
        <>
        
        <div>
        <div class="card" >
    <img src=""className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{element.nom}</h5>
    <p className="card-text">{element.prenom}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
        </>
      ))
    
  )
}

export default Carte