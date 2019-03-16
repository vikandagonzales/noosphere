// REACT
import React from 'react';

// ==========

class CharacterBuilder extends React.Component {
  render () {
    return (
      <section id="character-builder" className="hero is-fullheight is-bold is-dark">
        <div className="hero-body">
          <div className="container">
            <div className="header">
              <h1 className="title has-text-centered">Greetings, adventurer.</h1>
              <p className="subtitle has-text-centered">Click the cards below to start creating your character.</p>
              <progress className="progress is-primary" value="10" max="100"></progress>
            </div>

            <div className="buttons is-centered">
              <div className="field has-addons">
                <p className="control">
                  <span className="button is-static">
                    <span className="icon is-small">
                      <i className="fas fa-save"></i>
                    </span>
                    <span>Save Character</span>
                  </span>
                </p>
                <p className="control">
                  <span className="button is-static">
                    <span className="icon is-small">
                      <i className="fas fa-download"></i>
                    </span>
                    <span>Export PDF</span>
                  </span>
                </p>
                <p className="control">
                  <span className="button is-primary">
                    <span className="icon is-small">
                      <i className="fas fa-file"></i>
                    </span>
                    <span>Start Over</span>
                  </span>
                </p>
              </div>
            </div>

            <div className="cards columns">
              <div className="column is-4" id="nav-race">
                <a href="race.php">
                  <div className="card">
                    <div className="card-content">
                      <div className="content is-clearfix">
                        <p className="is-pulled-left">
                          <span className="lnr lnr-dna"></span>
                          Race
                  </p>
                        <p className="is-pulled-right">
                          <span className="lock" data-id="times">
                            <i className="fas fa-times"></i>
                          </span>
                          <span className="lock" data-id="check">
                            <i className="fas fa-check"></i>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div className="column is-4" id="nav-level">
                <a href="level.php">
                  <div className="card">
                    <div className="card-content">
                      <div className="content is-clearfix">
                        <p className="is-pulled-left">
                          <span className="lnr lnr-star"></span>
                          Level
                  </p>
                        <p className="is-pulled-right">
                          <span className="lock" data-id="times">
                            <i className="fas fa-times"></i>
                          </span>
                          <span className="lock" data-id="check">
                            <i className="fas fa-check"></i>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div className="column is-4" id="nav-class">
                <a href="class.php">
                  <div className="card">
                    <div className="card-content">
                      <div className="content is-clearfix">
                        <p className="is-pulled-left">
                          <span className="lnr lnr-dagger"></span>
                          Class
                  </p>
                        <p className="is-pulled-right">
                          <span className="lock" data-id="times">
                            <i className="fas fa-times"></i>
                          </span>
                          <span className="lock" data-id="check">
                            <i className="fas fa-check"></i>
                          </span>
                          <span className="lock" data-id="lock">
                            <i className="fas fa-lock"></i>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div className="column is-4" id="nav-alignment">
                <a href="alignment.php">
                  <div className="card">
                    <div className="card-content">
                      <div className="content is-clearfix">
                        <p className="is-pulled-left">
                          <span className="lnr lnr-theater"></span>
                          Alignment
                  </p>
                        <p className="is-pulled-right">
                          <span className="lock" data-id="times">
                            <i className="fas fa-times"></i>
                          </span>
                          <span className="lock" data-id="check">
                            <i className="fas fa-check"></i>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div className="column is-4" id="nav-background">
                <a href="background.php">
                  <div className="card">
                    <div className="card-content">
                      <div className="content is-clearfix">
                        <p className="is-pulled-left">
                          <span className="lnr lnr-file-search"></span>
                          Background
                  </p>
                        <p className="is-pulled-right">
                          <span className="lock" data-id="times">
                            <i className="fas fa-times"></i>
                          </span>
                          <span className="lock" data-id="check">
                            <i className="fas fa-check"></i>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div className="column is-4" id="nav-proficiencies">
                <a href="proficiencies.php">
                  <div className="card">
                    <div className="card-content">
                      <div className="content is-clearfix">
                        <p className="is-pulled-left">
                          <span className="lnr lnr-hammer-wrench"></span>
                          Proficiencies
                  </p>
                        <p className="is-pulled-right">
                          <span className="lock" data-id="times">
                            <i className="fas fa-times"></i>
                          </span>
                          <span className="lock" data-id="check">
                            <i className="fas fa-check"></i>
                          </span>
                          <span className="lock" data-id="lock">
                            <i className="fas fa-lock"></i>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div className="column is-4" id="nav-abilities">
                <a href="abilities.php">
                  <div className="card">
                    <div className="card-content">
                      <div className="content is-clearfix">
                        <p className="is-pulled-left">
                          <span className="lnr lnr-chart-bars"></span>
                          Abilities
                  </p>
                        <p className="is-pulled-right">
                          <span className="lock" data-id="times">
                            <i className="fas fa-times"></i>
                          </span>
                          <span className="lock" data-id="check">
                            <i className="fas fa-check"></i>
                          </span>
                          <span className="lock" data-id="lock">
                            <i className="fas fa-lock"></i>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div className="column is-4" id="nav-name">
                <a href="name.php">
                  <div className="card">
                    <div className="card-content">
                      <div className="content is-clearfix">
                        <p className="is-pulled-left">
                          <span className="lnr lnr-portrait"></span>
                          Name
                  </p>
                        <p className="is-pulled-right">
                          <span className="lock" data-id="times">
                            <i className="fas fa-times"></i>
                          </span>
                          <span className="lock" data-id="check">
                            <i className="fas fa-check"></i>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div className="column is-4" id="nav-summary">
                <a href="summary.php">
                  <div className="card">
                    <div className="card-content">
                      <div className="content is-clearfix">
                        <p className="is-pulled-left">
                          <span className="lnr lnr-document"></span>
                          Summary
                  </p>
                        <p className="is-pulled-right">
                          <span className="lock" data-id="unlock">
                            <i className="fas fa-lock-open"></i>
                          </span>
                          <span className="lock" data-id="lock">
                            <i className="fas fa-lock"></i>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>
    );
  };
};

export default CharacterBuilder;