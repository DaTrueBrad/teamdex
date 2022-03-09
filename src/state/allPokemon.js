import {atom} from 'recoil'

const pokemonState = atom({
  key: 'pokemonState',
  default: []
})

export default pokemonState