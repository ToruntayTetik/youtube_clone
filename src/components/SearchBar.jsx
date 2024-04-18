import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Paper, IconButton, Input } from '@mui/material'
import { Search } from '@mui/icons-material'

const SearchBar = () => {

  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault(); //sayfayı gereksiz yenilemeyi engellemek için kullanıyoruz.

    if (searchTerm) {
      navigate(`/search/${searchTerm}`)


      setSearchTerm('')
    }


  }
  return (
    <Paper
      components="form"
      // onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        pl: 2,
        boxShadow: 'none',
        mr: { sm: 5 }
      }}
    >
      <form onSubmit={handleSubmit} >
        <input
          className="search-bar"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => { setSearchTerm(e.target.value) }} //her yazdığımızda güncellemek için
        // onKeyDown={handleSubmit}
        />
        <IconButton type="submit" sx={{ p: '10px', color: 'red' }}>
          <Search />
        </IconButton>
      </form>
    </Paper>
  )
}

export default SearchBar
