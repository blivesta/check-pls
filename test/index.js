import imagesLoaded from 'imagesloaded'
import checkPls from '../check-pls'

describe('CheckPLS', () => {
  before(() => {
    document.body.innerHTML = window.__html__['test/fixtures/fixture.html']
  })

  after(() => {
    document.body.innerHTML = ''
  })

  describe('use imagesloaded', () => {
    describe('return string', () => {
      it('landscape', (done) => {
        const elements = document.querySelectorAll('.landscape')
        const el = Array.apply(null, elements)
        imagesLoaded(el, () => {
          el.map((node) => {
            const orientation = checkPls(node, null)
            expect(orientation).to.equal('landscape')
            done()
          })
        })
      })

      it('portrait', (done) => {
        const elements = document.querySelectorAll('.portrait')
        const el = Array.apply(null, elements)
        imagesLoaded(el, () => {
          el.map((node) => {
            const orientation = checkPls(node, null)
            expect(orientation).to.equal('portrait')
            done()
          })
        })
      })

      it('square', (done) => {
        const elements = document.querySelectorAll('.square')
        const el = Array.apply(null, elements)
        imagesLoaded(el, () => {
          el.map((node) => {
            const orientation = checkPls(node, null)
            expect(orientation).to.equal('square')
            done()
          })
        })
      })
    })

    describe('return boolean', () => {
      it('landscape', (done) => {
        const elements = document.querySelectorAll('.landscape')
        const el = Array.apply(null, elements)
        imagesLoaded(el, () => {
          el.map((node) => {
            const orientation = checkPls(node, 'landscape')
            expect(orientation).to.equal(true)
            done()
          })
        })
      })

      it('portrait', (done) => {
        const elements = document.querySelectorAll('.portrait')
        const el = Array.apply(null, elements)
        imagesLoaded(el, () => {
          el.map((node) => {
            const orientation = checkPls(node, 'portrait')
            expect(orientation).to.equal(true)
            done()
          })
        })
      })

      it('square', (done) => {
        const elements = document.querySelectorAll('.square')
        const el = Array.apply(null, elements)
        imagesLoaded(el, () => {
          el.map((node) => {
            const orientation = checkPls(node, 'square')
            expect(orientation).to.equal(true)
            done()
          })
        })
      })
    })

    describe('typeof', () => {
      it('string', (done) => {
        const elements = document.querySelectorAll('.landscape')
        const el = Array.apply(null, elements)
        imagesLoaded(el, () => {
          el.map((node) => {
            const orientation = checkPls(node, null)
            expect(orientation).to.be.a('string')
            done()
          })
        })
      })
      it('boolean', (done) => {
        const elements = document.querySelectorAll('.landscape')
        const el = Array.apply(null, elements)
        imagesLoaded(el, () => {
          el.map((node) => {
            const orientation = checkPls(node, 'landscape')
            expect(orientation).to.be.a('boolean')
            done()
          })
        })
      })
    })

    describe('error', () => {
      it('string', (done) => {
        const elements = document.querySelectorAll('.landscape')
        const el = Array.apply(null, elements)
        imagesLoaded(el, () => {
          el.map((node) => {
            const orientation = checkPls()
            expect(orientation).to.be.a('undefined')
            done()
          })
        })
      })
      it('boolean', (done) => {
        const elements = document.querySelectorAll('.landscape')
        const el = Array.apply(null, elements)
        imagesLoaded(el, () => {
          el.map((node) => {
            const orientation = checkPls('landscape', null)
            expect(orientation).to.be.a('undefined')
            done()
          })
        })
      })
    })
  })
})
