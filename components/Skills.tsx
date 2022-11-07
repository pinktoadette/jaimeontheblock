// @ts-nocheck
import { FC, useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';

const colors = {
    'financial': 'warning',
    'technical': 'info',
    'leadership': 'danger',
    'software': 'success'
}

const Skills: FC = () => {
    const [experiences, setExp] = useState([]);
    const [tags, setTags] = useState([]);
    const [loading, setLoading] = useState(false);

    const selectTag = (tagId: string) => {
        setLoading(true)
        tags.map((tag: any) => {
            if (tag.id === tagId) {
                tag["isActive"] = !tag["isActive"];
            }
            return tag;
        });

        filterExperiences();
        setLoading(false);
    }

    const filterExperiences = () => {
        const activeTag = tags.reduce((acc, ele: any) => {
            if (ele.isActive) {
                acc.push(...ele.experienceId)
            }
            return acc
        }, [])
        const x = experiences.filter((obj) => {
            if (activeTag.includes(obj.id)) {
                return obj;
            }
        });
        setExp(x);
    }


    useEffect(() => {
        if (experiences.length < 1) {
            fetch(`../api/experience`, {
                method: "GET"
            })
                .then(data => data.json())
                .then(data => {
                    setExp(data);
                });
        }
        if (tags.length < 1) {
            fetch(`../api/skills`, {
                method: "GET"
            })
                .then(data => data.json())
                .then(data => {
                    const format = data.map((tag: any) => ({ ...tag, isActive: false }));
                    setTags(format);
                });
        }

    }, [experiences, tags])

    return (
        <section className="primary unset">
            <h2 className="text-center">Skills Offer</h2>

            <Container>
                    <p>
                        <b>Am I an engineer or finance gal? </b>
                        I consider both. I have the hands-on experiences and technical + financial know-how.
                    </p>
                <p className="text-muted sub-bar">
                    Select skills you want to see experiences in.
                    {
                        Object.entries(colors).map(([key, value]) => (
                            <Badge key={key} bg={value}>{key}</Badge>
                        ))
                    }
                </p>
                {tags.map((tag, key) => {
                    return (<Badge key={key}bg={tag.isActive ? 'danger' : 'light'} onClick={() => selectTag(tag.id)}>{tag.tag}</Badge>)
                })}

                < hr />
                { loading && <Spinner animation="border" /> }
                <Row className="col-md-12">
                    {experiences.map((exp, id) => {
                        return (
                            <Col className="col-md-6" key={id}>
                                <Card style={{ minHeight: "280px", marginBottom: "10px" }}>
                                    <Card.Header>
                                        {exp.location}
                                    </Card.Header>
                                    <Card.Body>
                                        {exp.des}
                                    </Card.Body>
                                    <Card.Footer>
                                        {exp.skills.map((skill, idx) => {
                                            return (<Badge key={idx} bg={(colors[skill.category] as string)}>{skill.tag}</Badge>)
                                        })}
                                    </Card.Footer>
                                </Card>

                            </Col>
                        )
                    })}
                </Row>

            </Container>

        </section>
    );
}

export default Skills;