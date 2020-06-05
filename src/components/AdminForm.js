import React from 'react'

const AdminForm = ({ id: key, majRecette, supprimerRecette, recettes }) => {
  const recette = recettes[key]

  const handleChange = (event, key) => {
    const { name, value } = event.target
    const recette = recettes[key]
    recette[name] = value
    majRecette(key, recette)
  }
  return (
    <div className='card'>
      <form className='admin-form'>
        <input
          value={recette.nom}
          onChange={(e) => handleChange(e, key)}
          name='nom'
          type='text'
          placeholder='Nom de la recette'
        />
        <input
          value={recette.image}
          onChange={(e) => handleChange(e, key)}
          name='image'
          type='text'
          placeholder="Adresse de l'image"
        />
        <textarea
          value={recette.ingredients}
          onChange={(e) => handleChange(e, key)}
          name='ingredients'
          rows='3'
          placeholder='liste des ingrédients'></textarea>
        <textarea
          value={recette.instructions}
          onChange={(e) => handleChange(e, key)}
          name='instructions'
          rows='15'
          placeholder='Liste des instructions'></textarea>
      </form>
      <button onClick={() => supprimerRecette(key)}>Supprimer</button>
    </div>
  )
}

export default AdminForm
