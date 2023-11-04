import addPhoto from '../assets/icons8-add-photo-48.png';

export const Input = () => {
  return (
    <div className='input'>
      <input type="text" placeholder='Type something ...' />

      <div className="send">
      <button>Send</button>
        <img src="" alt="" />

        <input type="file" name="addPhoto" id="addPhoto" style={{display: 'none'}}/>
        <label htmlFor="addPhoto"><img src={addPhoto} alt="" /></label>
        
        
      </div>
       

    </div>
  )
}
