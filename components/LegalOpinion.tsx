'use client';

import styles from './LegalOpinion.module.css';

export default function LegalOpinion() {
  return (
    <div className={styles.doc}>
      <div className={styles['doc-header']}>
        <div className={styles['logo-row']}>
          <div className={styles['logo-mark']}>
            <div className={styles['lm-bar']} style={{ height: '22px' }}></div>
            <div className={styles['lm-bar']} style={{ height: '16px', marginTop: '6px' }}></div>
            <div className={styles['lm-bar']} style={{ height: '22px' }}></div>
            <div className={styles['lm-bar']} style={{ height: '12px', marginTop: '10px' }}></div>
          </div>
          <div>
            <div className={styles['logo-text']}>haas</div>
            <div className={styles['logo-sub']}>AVOCATS</div>
          </div>
        </div>

        <div className={styles['doc-kicker']}>Legal Opinion — Confidentiel</div>
        <div className={styles['doc-title']}>Objet social — Marketplace<br />de services juridiques</div>
        <div className={styles['doc-subtitle']}>Conformité au regard de la loi n° 71-1130 du 31 décembre 1971</div>

        <div className={styles['meta-row']}>
          <div className={styles['meta-item']}>
            <label>Établi par</label><span>Cabinet HAAS Avocats</span>
          </div>
          <div className={styles['meta-item']}>
            <label>Date</label><span>29 mai 2026</span>
          </div>
          <div className={styles['meta-item']}>
            <label>Classification</label><span>Confidentiel</span>
          </div>
        </div>
      </div>

      {/* I. OBJET */}
      <div className={styles.section}>
        <div className={styles['section-heading']}>
          <div className={styles['section-num']}>I</div>
          <div className={styles['section-title']}>Objet de la consultation</div>
        </div>
        <p>Une société d'édition envisage de développer une marketplace de services juridiques en ligne. Elle souhaite intégrer dans ses statuts une clause d'objet social lui permettant de proposer des outils numériques facilitant l'accès au droit, en partenariat avec des professionnels habilités.</p>
        <p>La clause initiale soumise à analyse est la suivante :</p>
        <div className={`${styles['clause-box']} ${styles.amber}`}>
          <div className={styles['cb-label']}>⚠ Clause initiale — à sécuriser</div>
          <p>« La société a également pour objet, de faciliter l'accès au droit pour tous, en proposant des services d'information, d'orientation, de médiation ou d'<strong>accompagnement juridique</strong>, afin de rendre le droit plus accessible, compréhensible et effectif pour les personnes physiques et morales par le développement et la mise à disposition d'outils numériques, de plateformes en ligne ou d'applications dédiées à l'information juridique et à l'<strong>autonomisation des usagers</strong> en partenariat avec des avocats, notaires, médiateurs ou autres professionnels du droit, afin de garantir la qualité et la pertinence des informations et services proposés. »</p>
        </div>
      </div>

      {/* II. CADRE JURIDIQUE */}
      <div className={styles.section}>
        <div className={styles['section-heading']}>
          <div className={styles['section-num']}>II</div>
          <div className={styles['section-title']}>Cadre juridique applicable</div>
        </div>

        <div className={styles['sub-heading']}>2.1 Le monopole encadré de la consultation juridique</div>
        <p>La loi n° 71-1130 du 31 décembre 1971 réserve, à titre habituel et rémunéré, la consultation juridique et la rédaction d'actes sous seing privé aux professions habilitées. La jurisprudence définit la consultation juridique comme une <em>« prestation intellectuelle personnalisée tendant à fournir un avis concourant à la prise de décision du bénéficiaire »</em>, à distinguer de la simple information documentaire à caractère général.</p>

        <div className={styles['sub-heading']}>2.2 La frontière information / conseil personnalisé</div>
        <ul className={styles.bullets}>
          <li><strong>Licite :</strong> diffusion de modèles ou informations non individualisées (Cass. soc., modèles de contrats de travail standardisés) ;</li>
          <li><strong>Soumis au monopole :</strong> vérification de la situation d'un client au regard de la réglementation, analyse de ses droits, rédaction de réclamations.</li>
        </ul>

        <div className={styles['sub-heading']}>2.3 Legaltech et marketplaces — enseignements jurisprudentiels</div>
        <p>Les arrêts relatifs à <em>demanderjustice.com</em> et <em>saisirprudhomme.com</em> ont validé le modèle des plateformes se limitant à des formulaires standardisés, sans représentation ni assistance individualisée. La Cour de cassation a admis le principe des comparateurs d'avocats exploités par des tiers, sous réserve d'une information loyale et transparente.</p>
      </div>

      {/* III. ANALYSE CRITIQUE */}
      <div className={styles.section}>
        <div className={styles['section-heading']}>
          <div className={styles['section-num']}>III</div>
          <div className={styles['section-title']}>Analyse critique de la clause initiale</div>
        </div>

        <div className={styles['warn-block']}>
          <div className={styles['wb-title']}>⚠ Risque élevé — « accompagnement juridique »</div>
          <p>C'est la formulation la plus exposée. Elle évoque une assistance continue dans la compréhension et l'application du droit — activité relevant typiquement de la consultation juridique réservée. La jurisprudence a requalifié en exercice illégal des sociétés pratiquant un « accompagnement » de victimes jusqu'à la transaction avec leur assureur.</p>
        </div>

        <div className={styles['warn-block']}>
          <div className={styles['wb-title']}>⚠ Risque modéré — « médiation » sans précision</div>
          <p>Si la société conduit elle-même des séances impliquant des analyses de droits des parties, elle approche dangereusement la consultation juridique réservée.</p>
        </div>

        <div className={styles['warn-block']}>
          <div className={styles['wb-title']}>⚠ Risque structurel — absence de clause d'exclusion</div>
          <p>La clause ne précise pas que la société n'exerce aucune activité de consultation individualisée, de rédaction d'actes, ni de représentation en justice. En cas de contentieux avec un ordre professionnel, ce silence pourra être retourné contre elle.</p>
        </div>

        <div className={styles['sub-heading']} style={{ marginTop: '1.3rem' }}>Tableau récapitulatif des risques</div>
        <table className={styles['risk-table']}>
          <thead>
            <tr>
              <th style={{ width: '30%' }}>Formulation visée</th>
              <th style={{ width: '15%' }}>Niveau</th>
              <th>Solution proposée</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>« accompagnement juridique »</td>
              <td><span className={`${styles['risk-tag']} ${styles.high}`}>Élevé</span></td>
              <td>Suppression — remplacé par « mise en relation »</td>
            </tr>
            <tr>
              <td>« médiation » sans limitation</td>
              <td><span className={`${styles['risk-tag']} ${styles.med}`}>Modéré</span></td>
              <td>Limité à la mise en relation avec des médiateurs agréés</td>
            </tr>
            <tr>
              <td>« orientation »</td>
              <td><span className={`${styles['risk-tag']} ${styles.med}`}>Modéré</span></td>
              <td>Supprimé ou strictement limité à l'orientation vers un type de professionnel</td>
            </tr>
            <tr>
              <td>Absence de clause d'exclusion</td>
              <td><span className={`${styles['risk-tag']} ${styles.struct}`}>Structurel</span></td>
              <td>Ajout d'une exclusion expresse (consultation, rédaction, représentation)</td>
            </tr>
            <tr>
              <td>Responsabilité des « services proposés » assumée par la société</td>
              <td><span className={`${styles['risk-tag']} ${styles.struct}`}>Structurel</span></td>
              <td>Renvoi à la responsabilité exclusive des professionnels habilités</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* IV. CLAUSE RÉVISÉE */}
      <div className={styles.section}>
        <div className={styles['section-heading']}>
          <div className={styles['section-num']}>IV</div>
          <div className={styles['section-title']}>Clause d'objet social révisée</div>
        </div>

        <div className={`${styles['clause-box']} ${styles.green}`}>
          <div className={styles['cb-label']}>✓ Clause sécurisée — Cabinet HAAS Avocats</div>
          <p>« La société a notamment pour objet de faciliter l'accès au droit au moyen du développement et de l'exploitation d'outils numériques, de plateformes en ligne ou d'applications dédiées à la diffusion d'<strong>informations juridiques générales</strong> et à la <strong>mise en relation</strong> d'utilisateurs avec des avocats, notaires, médiateurs ou autres professionnels du droit. La société agit en qualité d'<strong>intermédiaire technique</strong> et ne fournit pas de consultations juridiques individualisées, ne rédige pas d'actes pour des cas particuliers et n'exerce aucune activité de représentation ou d'assistance en justice, lesquelles sont assurées, le cas échéant, directement par les professionnels du droit dûment habilités, <strong>sous leur responsabilité exclusive</strong>. »</p>
        </div>

        <div className={styles['sub-heading']} style={{ marginTop: '1.2rem' }}>Commentaire analytique bloc par bloc</div>

        <div className={styles['annot-row']}>
          <div className={styles['annot-num']}>1</div>
          <div className={styles['annot-body']}><strong>« informations juridiques générales »</strong> — le terme « générales » ancre l'activité dans la sphère documentaire et non dans la consultation personnalisée, conformément à la distinction jurisprudentielle.</div>
        </div>
        <div className={styles['annot-row']}>
          <div className={styles['annot-num']}>2</div>
          <div className={styles['annot-body']}><strong>« mise en relation »</strong> — formulation validée par la jurisprudence sur les comparateurs et marketplaces, circonscrivant le rôle de la société à celui d'un entremetteur technique.</div>
        </div>
        <div className={styles['annot-row']}>
          <div className={styles['annot-num']}>3</div>
          <div className={styles['annot-body']}><strong>« intermédiaire technique »</strong> — affirmation explicite constitutive d'un bouclier statutaire en cas d'action des ordres professionnels ou de poursuite pénale.</div>
        </div>
        <div className={styles['annot-row']}>
          <div className={styles['annot-num']}>4</div>
          <div className={styles['annot-body']}><strong>Clause d'exclusion expresse</strong> — la négation triple (ne fournit pas / ne rédige pas / n'exerce aucune) couvre l'intégralité des activités réservées par la loi de 1971, notamment la représentation en justice (art. 4) et la consultation individualisée (art. 54).</div>
        </div>
        <div className={styles['annot-row']}>
          <div className={styles['annot-num']}>5</div>
          <div className={styles['annot-body']}><strong>« responsabilité exclusive »</strong> — distingue clairement les rôles et prévient toute tentative de mise en cause de la plateforme comme prestataire de conseil juridique.</div>
        </div>
      </div>

      {/* V. CONCLUSION */}
      <div className={styles.section}>
        <div className={styles['section-heading']}>
          <div className={styles['section-num']}>V</div>
          <div className={styles['section-title']}>Conclusion et recommandations</div>
        </div>
        <div className={styles['conclusion-box']}>
          <p style={{ marginBottom: '0.8rem' }}>La clause initiale présente des fragilités significatives au regard de la loi du 31 décembre 1971. La clause révisée corrige ces fragilités en :</p>
          <ul className={styles.bullets}>
            <li>Recentrant l'objet sur la diffusion d'informations générales et la mise en relation ;</li>
            <li>Affirmant le rôle d'intermédiaire technique de la société ;</li>
            <li>Excluant formellement toute activité de conseil individualisé, de rédaction d'actes et de représentation en justice ;</li>
            <li>Renvoyant la responsabilité des prestations juridiques aux seuls professionnels habilités.</li>
          </ul>
          <p style={{ marginTop: '0.8rem', marginBottom: '0.5rem' }}><strong style={{ color: 'var(--red)' }}>Recommandations complémentaires :</strong></p>
          <ul className={styles.bullets}>
            <li><strong>CGU :</strong> préciser les limitations de responsabilité de la plateforme et l'absence de relation avocat-client avec la société ;</li>
            <li><strong>Contrats professionnels :</strong> formaliser l'indépendance des professionnels et les modalités de rémunération conformes aux règles déontologiques ;</li>
            <li><strong>Contenus IA :</strong> si la plateforme utilise des outils d'IA, les contenus devront demeurer exclusivement informatifs et généraux, sans personnalisation à la situation de l'utilisateur.</li>
          </ul>
        </div>
      </div>

      <div className={styles.disclaimer}>Le présent legal opinion est établi sur la base des éléments communiqués et de l'état du droit au 29 mai 2026. Il ne constitue pas un avis définitif et ne saurait engager la responsabilité du Cabinet au-delà des faits portés à sa connaissance. — Cabinet HAAS Avocats · Droit du numérique, RGPD, AI Act, Cybersécurité, IT</div>
    </div>
  );
}
