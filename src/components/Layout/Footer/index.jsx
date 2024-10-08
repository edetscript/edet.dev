import React from 'react'
import { Skill, Icon } from 'components/Common'
import classes from './footer.module.styl'

export const Footer = () => (
  <footer className={`footer ${ classes.footer }`}>
    <div className={`footer__base ${ classes.base }`}>
      <span>
        Desenvolvido em <address itemScope itemType="https://schema.org/PostalAddress">Curitiba-PR, Brasil</address> com o
        <span
          data-tooltip="Feito com o coração"
        >
          <Icon
            id="heart"
            fill="#f00"
            size="20"
            role="img"
            aria-label="coração"
            title="coração"
          />
        </span> por <strong>Fernando Moreira</strong>, usando <a
          href="https://www.gatsbyjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          data-tooltip="Desenvolvido usando React com Gatsby"
        >
          <Skill id="gatsby" size="18px" />
        </a> e hospedado no <a
          href="https://netlify.com/"
          target="_blank"
          rel="noopener noreferrer"
          data-tooltip="Hospedado no Netlify"
        >
          <Skill id="netlify" size="18px" />
        </a>. Veja o código no <a
          href="https://github.com/aspabedi/edet.dev"
          target="_blank"
          rel="noopener noreferrer"
          data-tooltip="Veja o código no Github"
        >
          <Skill id="github" size="18px" />
        </a>.
      </span>
    </div>
  </footer>
)
