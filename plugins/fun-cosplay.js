let handler = async (m, { conn, text }) => {
    let yh = global.cosplay
    let url = yh[Math.floor(Math.random() * yh.length)]
    conn.sendButton(m.chat, 'Mau cosplay bg? 🗿', 'ragil bot 🗿🏳️‍🌈', url, [['LAGI', '#cosplay']], m)
  }
  handler.command = /^(cosplay)$/i
  handler.tags = ['random pict']
  handler.help = ['cosplay']
  handler.limit = true
  
  export default handler
  
  global.cosplay = [
"https://telegra.ph/file/713dc4ac5f8b6eec331ae.jpg",
"https://telegra.ph/file/c02be7b0991c5ce2b2cdb.jpg",
"https://telegra.ph/file/12d8fed804bf26beb8b4e.jpg",
"https://telegra.ph/file/b48b494b7cf0449aaa194.jpg",
"https://telegra.ph/file/fc5460b54a31692503dda.jpg",
"https://telegra.ph/file/6d7418df7e081a9c19c04.jpg",
"https://telegra.ph/file/898fdca9c14265d56c193.jpg",
"https://telegra.ph/file/e23cc498e64d4af1de2cc.jpg",
"https://telegra.ph/file/62a9057c7a336bf15f411.jpg",
"https://telegra.ph/file/c6d02487c09a4b47d0a9d.jpg",
"https://telegra.ph/file/abc27b5f839fc668cf77c.jpg",
"https://telegra.ph/file/3ce0132eea27e94fe0547.jpg",
"https://telegra.ph/file/9a01852ecaf65c7751f68.jpg",
"https://telegra.ph/file/14ec3c1a18bea9ab74c2f.jpg",
"https://telegra.ph/file/b719ef0bab4d72cb8ee9f.jpg",
"https://telegra.ph/file/a46d33437642e5f67febe.jpg",
"https://telegra.ph/file/573b6e1b828a6f0c7aac5.jpg",
"https://telegra.ph/file/58157ee9b9af788225baf.jpg",
"https://telegra.ph/file/776ff1a6ff60c739786f7.jpg",
"https://telegra.ph/file/882b7b7d11abeb54b5577.jpg",
"https://telegra.ph/file/244b5be8e80474aa272c2.jpg",
"https://telegra.ph/file/928b5b43448b1ce4e2bd6.jpg",
"https://telegra.ph/file/44594cde151298ca66c62.jpg",
"https://telegra.ph/file/d4f57e0d7da262f598cd9.jpg",
"https://telegra.ph/file/56548f3610f0c7807c49a.jpg",
"https://telegra.ph/file/52e6baa90ebc69b638844.jpg",
"https://telegra.ph/file/71b0adc0499bdeb8fc7e9.jpg",
"https://telegra.ph/file/a392d3a3339c67178eaff.jpg",
"https://telegra.ph/file/a392d3a3339c67178eaff.jpg",
"https://telegra.ph/file/2368450492a4fd7fd4090.jpg",
"https://telegra.ph/file/025b8970d7e6b0fc7f124.jpg",
"https://telegra.ph/file/9440799eaa9e7f3680dfc.jpg",
"https://telegra.ph/file/b85b1a8ef333a763f674a.jpg",
"https://telegra.ph/file/2ccee299ef2e2d1284e18.jpg",
"https://telegra.ph/file/d22071bc6797924653e75.jpg",
"https://telegra.ph/file/a72e44361dd0a56538295.jpg",
"https://telegra.ph/file/e876aad4cfcf22dffc8d7.jpg",
"https://telegra.ph/file/1c8613ab5366ae833c141.jpg",
"https://telegra.ph/file/f41bc2157c6121aa878c7.jpg",
"https://telegra.ph/file/e4311db9afe47d9de8d88.jpg",
"https://telegra.ph/file/49d6c908eda316781a74e.jpg",
"https://telegra.ph/file/4b97edf8df5af86d0550c.jpg",
"https://telegra.ph/file/b0d33859eb0215ee0e25a.jpg",
"https://telegra.ph/file/bee9927866afb613a8b53.jpg",
"https://telegra.ph/file/faa8ed025f26be9dba7cc.jpg",
"https://telegra.ph/file/3603441605f2d46824756.jpg",
"https://telegra.ph/file/dcf3ed8daf3797155a9a4.jpg",
"https://telegra.ph/file/ec3beca84a5f280fb3308.jpg",
"https://telegra.ph/file/d70915729cf6ae402f611.jpg",
"https://telegra.ph/file/88ec4ae81bc08f655f2dc.jpg",
"https://telegra.ph/file/8a380eaad89f47871644c.jpg",
"https://telegra.ph/file/f4af785298d82ec50bc8d.jpg",
"https://telegra.ph/file/44a4c672d553c0f5f1ce4.jpg",
"https://telegra.ph/file/0775ed2287b91b85c5877.jpg",
"https://telegra.ph/file/7881ad21ad06886a54fde.jpg",
"https://telegra.ph/file/52be088896122f01d48cd.jpg",
"https://telegra.ph/file/5d98514bfcefcd6d6b1b9.jpg",
"https://telegra.ph/file/68af87f56d8700aea9bd3.jpg",
"https://telegra.ph/file/bae6ec58118f3d7155db0.jpg",
"https://telegra.ph/file/1e66b2858bd2dea05ad70.jpg",
"https://telegra.ph/file/6b619acba347e0918e67a.jpg",
"https://telegra.ph/file/ecdaaff67eeac935ff543.jpg",
"https://telegra.ph/file/a9bcbf0af83a56beb5dc5.jpg",
"https://telegra.ph/file/13bac6615e329104296e8.jpg",
"https://telegra.ph/file/15284407817aa93f8c746.jpg",
"https://telegra.ph/file/23ecd42403715b58f31c3.jpg",
"https://telegra.ph/file/bc7ee41b360816b01291b.jpg",
"https://telegra.ph/file/fac2fddea03077ae3d3a7.jpg",
"https://telegra.ph/file/09ec3d8b7b291d941090b.jpg",
"https://telegra.ph/file/431fe8c6d9272ef69ad7b.jpg",
"https://telegra.ph/file/616636028e6f0a23e1599.jpg",
"https://telegra.ph/file/b2952a0d70fd0c7153a63.jpg",
"https://telegra.ph/file/3aaead8ab0a4e739cd438.jpg",
"https://telegra.ph/file/4a151fb702b7d0729a2e9.jpg",
"https://telegra.ph/file/45ee0c5cccb206f539e0b.jpg",
"https://telegra.ph/file/9e98e0e07b264998557a8.jpg",
"https://telegra.ph/file/e6730f362495aaeb82b9a.jpg",
"https://telegra.ph/file/5ec451016613cd8ec0698.jpg",
"https://telegra.ph/file/d78a91fd014fee2c7311d.jpg",
"https://telegra.ph/file/96fff286b63c62c7bbcac.jpg",
"https://telegra.ph/file/d6bb019f4ff0308420e63.jpg",
"https://telegra.ph/file/57c853cfbb0fb5b2f0e39.jpg",
"https://telegra.ph/file/bb8bf4e57d2e9b5d526b2.jpg",
"https://telegra.ph/file/3088e8b3d0d519542d4a7.jpg",
"https://telegra.ph/file/9141697b6ba7d3a0f03d2.jpg",
"https://telegra.ph/file/5720f2927baade70521ef.jpg",
"https://telegra.ph/file/b07f5a1e471f813443999.jpg",
"https://telegra.ph/file/c4a7dc14854ae1a7c837b.jpg",
"https://telegra.ph/file/15759ce2346418acd9625.jpg",
"https://telegra.ph/file/d9bf46bb0f1d76a2334af.jpg",
"https://telegra.ph/file/91218165ca3ef5e3d1e1c.jpg",
"https://telegra.ph/file/6a90c6a6042111ef45dc3.jpg",
"https://telegra.ph/file/aec1c3b57dfa5363beb0f.jpg",
"https://telegra.ph/file/f63c8fa69ff271d1d0713.jpg",
"https://telegra.ph/file/bc2b831c579552c40e430.jpg",
"https://telegra.ph/file/4c2a53dd04b1ec7c568a9.jpg",
"https://telegra.ph/file/25531bd5420c3126a8f15.jpg",
"https://telegra.ph/file/30aa8063b68bf661e94e6.jpg",
"https://telegra.ph/file/36d06de9a05e5f37d9a94.jpg",
"https://telegra.ph/file/3cf2e01be4d13ef3d7c99.jpg",
"https://telegra.ph/file/0ca4b07b12ec5a49307c0.jpg",
"https://telegra.ph/file/64649e3bb9547151a9f59.jpg",
"https://telegra.ph/file/08b7390f819c84c314b0e.jpg",
"https://telegra.ph/file/f9b05880cf5ab1360035b.jpg",
"https://telegra.ph/file/8e93dd4c193734b557cb4.jpg",
"https://telegra.ph/file/9c1818607e87ed5087787.jpg",
"https://telegra.ph/file/8293bbc0193d4d2753d8b.jpg",
"https://telegra.ph/file/3b9d0434e0ae40fca54f2.jpg",
"https://telegra.ph/file/3a840b68e814505cfbfd9.jpg",
"https://telegra.ph/file/27391c96042bcfd51ad6c.jpg",
"https://telegra.ph/file/dc257ef9c6320d36ca759.jpg",
"https://telegra.ph/file/0ca1b1fbac9eea375a7da.jpg",
"https://telegra.ph/file/2f250f095cb1d2fdc20a9.jpg",
"https://telegra.ph/file/106667a60e57652207099.jpg",
"https://telegra.ph/file/101939b05a6037f63d1b2.jpg",
"https://telegra.ph/file/eb96e87edc4c7488407b7.jpg",
"https://telegra.ph/file/a40e4433485dd24aca3de.jpg",
"https://telegra.ph/file/26cdb8f3f85c8dadb720f.jpg",
"https://telegra.ph/file/cdda51ad89b92bbbbc680.jpg",
"https://telegra.ph/file/42bd9d72cc40e2c636aae.jpg",
"https://telegra.ph/file/4892dde31302ecee7372a.jpg",
"https://telegra.ph/file/fef90ff5a980e11a27a4e.jpg",
"https://telegra.ph/file/6e4b698d3a8608a1b8161.jpg",
"https://telegra.ph/file/179db3e3a774fc8b9c2a7.jpg",
"https://telegra.ph/file/1348de1085b0c790a2c29.jpg",
"https://telegra.ph/file/0ed06d331a557b8910438.jpg",
"https://telegra.ph/file/5e43be3995e3dccee61bf.jpg",
"https://telegra.ph/file/317db39d0e7f390e926f7.jpg",
"https://telegra.ph/file/9e73240437d40fa87eb24.jpg",
"https://telegra.ph/file/aa32fe91ac00268a07ba7.jpg",
"https://telegra.ph/file/b89cff001244032ec7b08.jpg",
"https://telegra.ph/file/c91d1a1368d0b158c484c.jpg",
"https://telegra.ph/file/ca9488a037a6c2b1426ac.jpg",
"https://telegra.ph/file/a3b6820900b1b5e0e2234.jpg",
"https://telegra.ph/file/3b2979aa3e021298cefc1.jpg",
"https://telegra.ph/file/ec22a225e0ae4fd879c67.jpg",
"https://telegra.ph/file/1fe43b74b06f5a4b711b0.jpg",
"https://telegra.ph/file/b0752ee58d8df5fd98f4b.jpg",
"https://telegra.ph/file/a9db258f38f287df8c2a2.jpg",
"https://telegra.ph/file/f6d94acf1dc71ae9ad4f4.jpg",
"https://telegra.ph/file/34259c25d079c1970bcc9.jpg",
"https://telegra.ph/file/8dbcdf64a7d6c55734b9a.jpg",
"https://telegra.ph/file/23da744c506d1566d5c9a.jpg",
"https://telegra.ph/file/f7ab5ab0403ad18870bd1.jpg",
"https://telegra.ph/file/a07caf4b1d6fe89c13dc1.jpg",
"https://telegra.ph/file/9a2bf38d1e7c8da663fa5.jpg",
"https://telegra.ph/file/4aa573ad6c1f0e1689120.jpg",
"https://telegra.ph/file/dd3314ea8357ca58693db.jpg",
"https://telegra.ph/file/df3d49e2f686343759048.jpg",
"https://telegra.ph/file/2f43aaf50b4e108e39cba.jpg",
"https://telegra.ph/file/4c4e91d3efd2924693d24.jpg",
"https://telegra.ph/file/6c806183c53e7380bc0fc.jpg",
"https://telegra.ph/file/de94aab9a5687fef36bf4.jpg",
"https://telegra.ph/file/b807c3fa6da503a022ebf.jpg",
"https://telegra.ph/file/47c755dbd86ff45e4073d.jpg",
"https://telegra.ph/file/4bb84e71e1cb61c086b20.jpg",
"https://telegra.ph/file/c0acfdb67d08d7e1135d7.jpg",
"https://telegra.ph/file/191dba55eb4d16e383f89.jpg",
"https://telegra.ph/file/94519171ae543d46c4e0e.jpg",
"https://telegra.ph/file/070197d126948c50d747e.jpg",
"https://telegra.ph/file/c9f50d99c60c439895aed.jpg",
"https://telegra.ph/file/7de49364cc80daf897c92.jpg",
"https://telegra.ph/file/a6beb515e2cc46513c079.jpg",
"https://telegra.ph/file/52280adf82e20077c06d7.jpg",
"https://telegra.ph/file/0f8969bb01212ac78d879.jpg",
"https://telegra.ph/file/b53a92322a707947b57ef.jpg",
"https://telegra.ph/file/ffbcb5f5dc9242c42a262.jpg",
"https://telegra.ph/file/0c03f011fc52c68979470.jpg",
"https://telegra.ph/file/b9b3e1c7f53d6f5b368e5.jpg",
"https://telegra.ph/file/b2b3a9ee14c7b3c18a915.jpg",
"https://telegra.ph/file/a26da271f8db1f918c0f6.jpg",
"https://telegra.ph/file/929258aa464ed117bc228.jpg",
"https://telegra.ph/file/9b9de2e138a3c3fa046a4.jpg",
"https://telegra.ph/file/ae6df91211c8b76d23052.jpg",
"https://telegra.ph/file/06d3ae0bef7b63f7547d4.jpg",
"https://telegra.ph/file/58ee167cd9745c0fea5bf.jpg",
"https://telegra.ph/file/14b8b5a63b3f264288cde.jpg",
"https://telegra.ph/file/6ea94ec868b0cd21bac0e.jpg",
"https://telegra.ph/file/8448db49ec12c5fc3defb.jpg",
"https://telegra.ph/file/dfee2475af0b43323c831.jpg",
"https://telegra.ph/file/b63a8d892cfaa0e3a6ca9.jpg",
"https://telegra.ph/file/1dcb6d0bda741ee81e614.jpg",
"https://telegra.ph/file/d7b534bd5c0923f359111.jpg",
"https://telegra.ph/file/e3611a423fc675e8031e4.jpg"
  ]