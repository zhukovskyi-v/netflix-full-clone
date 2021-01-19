import { instance } from '../service/axios'
import { requests } from '../service/reques'

export let filmTitle = 'Pieces of a Woman'
export let filmDescr =
  'A heartbreaking home birth leaves a woman grappling with the profound emotional fallout, isolated from her partner and family by a chasm of grief.'
export let filmImg =
  'https://occ-0-2430-2433.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABVHW4ru2QeU2z1GRLD_Xbfl8OrLsIeaMMGU1S5kKml2-k2YwueyDh92CyppTyRc_ZJ7b0l1i_DXkMBLiuqJC_FUqkvwZ.jpg?r=8d3'
const filmBaseImgUrl = 'https://image.tmdb.org/t/p/original'

instance.get(requests.netflixFeatureOriginal).then((res) => {
  const film =
    res.data.results[
      Math.floor(Math.random() * res.data.results.length - 1)
    ]
  filmTitle = film.original_name
  filmDescr = film.overview
  filmImg = filmBaseImgUrl + film.backdrop_path
})
