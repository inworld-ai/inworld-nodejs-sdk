// https://docs.aws.amazon.com/polly/latest/dg/ph-table-english-us.html
// http://www.visagetechnologies.com/uploads/2012/08/MPEG-4FBAOverview.pdf
// https://docs.readyplayer.me/ready-player-me/avatars/avatar-creator/customization-and-configuration
// https://developer.oculus.com/documentation/unity/audio-ovrlipsync-viseme-reference/

// supported visemes:

// viseme_sil - 0
// viseme_PP - 1
// viseme_FF - 2
// viseme_TH - 3
// viseme_DD - 4
// viseme_kk - 5
// viseme_CH - 6
// viseme_SS - 7
// viseme_nn - 8
// viseme_RR - 9
// viseme_aa - 10
// viseme_E - 11
// viseme_I - 12
// viseme_O - 13
// viseme_U - 14

type Range<T extends number> = number extends T ? number : _Range<T, []>;
type _Range<T extends number, R extends unknown[]> = R['length'] extends T
  ? R[number]
  : _Range<T, [R['length'], ...R]>;

export const phonemeToVisemeMap: { [phoneme: string]: Range<15> | null } = {
  // Consonants
  b: 1,
  d: 4,
  d͡ʒ: 6,
  ð: 3,
  f: 2,
  ɡ: 5,
  h: 5, // ??? no mapping in pdf
  j: 12, // ??? recheck
  k: 5,
  l: 8,
  m: 1,
  n: 8,
  ŋ: 5, // ???
  p: 1,
  ɹ: 9,
  s: 7,
  ʃ: 6,
  t: 4,
  t͡ʃ: 6,
  θ: 3,
  v: 2,
  w: 14,
  z: 7,
  ʒ: 6,

  // Vowels
  ə: 11,
  ɚ: 11,
  æ: 10,
  aɪ: 10,
  aʊ: 10,
  ɑ: 10,
  eɪ: 11,
  ɝ: 11,
  ɛ: 11,
  i: 12,
  ɪ: 12,
  oʊ: 13,
  ɔ: 13,
  ɔɪ: 13,
  u: 14,
  ʊ: 14,
  ʌ: 11,

  // Additional Symbols
  ˈ: null,
  ˌ: null,
  '.': null,
  '<INTERSPERSE_CHARACTER>': null,
};
