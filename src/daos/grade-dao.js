import kindergartenRaw from '../mock-data/raw/kindergarten-raw'
import thirdRaw from '../mock-data/raw/third-raw'
import sixthRaw from '../mock-data/raw/sixth-raw'

// TODO - replace with calls to database
export function getKindergartenRaw() {
  return new Promise((resolve) => {
    resolve(kindergartenRaw)
  })
}

export function getThirdRaw() {
  return new Promise((resolve) => {
    resolve(thirdRaw)
  })
}

export function getSixthRaw() {
  return new Promise((resolve) => {
    resolve(sixthRaw)
  })
}