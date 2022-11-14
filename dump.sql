--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: games; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.games (
    id integer NOT NULL,
    "homePlayer" character varying(30) NOT NULL,
    "visitorPlayer" character varying(30) NOT NULL,
    finished boolean DEFAULT false NOT NULL,
    "homeResult" integer DEFAULT 0 NOT NULL,
    "visitorResult" integer DEFAULT 0 NOT NULL,
    "createAt" timestamp without time zone DEFAULT now() NOT NULL
);


--
-- Name: games_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.games_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: games_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.games_id_seq OWNED BY public.games.id;


--
-- Name: results; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.results (
    id integer NOT NULL,
    "homeGuess" integer NOT NULL,
    "visitorGuess" integer NOT NULL,
    scored boolean,
    "createAt" timestamp without time zone DEFAULT now(),
    "userId" integer NOT NULL
);


--
-- Name: results_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.results_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: results_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.results_id_seq OWNED BY public.results.id;


--
-- Name: sessions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.sessions (
    id integer NOT NULL,
    token character varying(50) NOT NULL,
    "userId" integer NOT NULL,
    active boolean DEFAULT true NOT NULL,
    "createAt" timestamp without time zone DEFAULT now()
);


--
-- Name: sessions_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.sessions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: sessions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.sessions_id_seq OWNED BY public.sessions.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    username character varying(30) NOT NULL,
    email character varying(100) NOT NULL,
    password text NOT NULL,
    "createAt" timestamp without time zone DEFAULT now()
);


--
-- Name: usersGuess; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."usersGuess" (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    "gameId" integer NOT NULL,
    "resultId" integer NOT NULL
);


--
-- Name: usersGuess_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."usersGuess_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: usersGuess_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."usersGuess_id_seq" OWNED BY public."usersGuess".id;


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: games id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.games ALTER COLUMN id SET DEFAULT nextval('public.games_id_seq'::regclass);


--
-- Name: results id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.results ALTER COLUMN id SET DEFAULT nextval('public.results_id_seq'::regclass);


--
-- Name: sessions id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions ALTER COLUMN id SET DEFAULT nextval('public.sessions_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Name: usersGuess id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."usersGuess" ALTER COLUMN id SET DEFAULT nextval('public."usersGuess_id_seq"'::regclass);


--
-- Data for Name: games; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.games VALUES (1, 'Brasil', 'Sérvia', false, 0, 0, '2022-11-09 20:35:35.376435');
INSERT INTO public.games VALUES (2, 'Brasil', 'Suíça', false, 0, 0, '2022-11-09 20:37:51.749406');
INSERT INTO public.games VALUES (3, 'Camarões', 'Brasil', false, 0, 0, '2022-11-09 20:39:51.455423');
INSERT INTO public.games VALUES (4, 'Catar', 'Equador', false, 0, 0, '2022-11-12 20:53:53.853993');
INSERT INTO public.games VALUES (5, 'Senegal', 'Holanda', false, 0, 0, '2022-11-12 20:54:12.778349');
INSERT INTO public.games VALUES (6, 'Argentina', 'Arábia Saudita', false, 0, 0, '2022-11-12 20:54:28.065671');
INSERT INTO public.games VALUES (7, 'Estados Unidos', 'Gales', false, 0, 0, '2022-11-12 20:54:46.824691');
INSERT INTO public.games VALUES (8, 'México', 'Polônia', false, 0, 0, '2022-11-12 20:55:03.913187');
INSERT INTO public.games VALUES (9, 'Marrocos', 'Croácia', false, 0, 0, '2022-11-12 20:55:17.559091');
INSERT INTO public.games VALUES (10, 'Espanha', 'Costa Rica', false, 0, 0, '2022-11-12 20:55:31.452953');
INSERT INTO public.games VALUES (11, 'Suíça', 'Camarões', false, 0, 0, '2022-11-12 20:55:54.290399');
INSERT INTO public.games VALUES (12, 'Portugal', 'Gana', false, 0, 0, '2022-11-12 20:56:08.426166');
INSERT INTO public.games VALUES (13, 'Gales', 'Irã', false, 0, 0, '2022-11-12 20:56:20.651264');
INSERT INTO public.games VALUES (14, 'Holanda', 'Equador', false, 0, 0, '2022-11-12 20:56:31.887243');
INSERT INTO public.games VALUES (15, 'França', 'Dinamarca', false, 0, 0, '2022-11-12 20:56:52.176522');


--
-- Data for Name: results; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.results VALUES (1, 2, 0, NULL, '2022-11-12 21:05:18.581038', 1);
INSERT INTO public.results VALUES (2, 1, 1, NULL, '2022-11-12 21:05:58.083782', 1);
INSERT INTO public.results VALUES (4, 3, 2, NULL, '2022-11-12 21:12:32.174765', 2);


--
-- Data for Name: sessions; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.sessions VALUES (1, '382f26a9-3215-4179-8e98-3057085cfd3b', 1, true, '2022-11-12 20:45:15.413399');
INSERT INTO public.sessions VALUES (2, '9359b454-218a-461b-b57b-c9a74bc8b8a0', 2, true, '2022-11-12 20:59:20.248438');


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (1, 'Kratos', 'god@email.com', '$2b$10$0WKQPB.74j3FeSK2nSR6feR400JuY39O0wRqzd4wAQhCpw880Q7sG', '2022-11-12 20:44:43.761829');
INSERT INTO public.users VALUES (2, 'cj', 'cj@email.com', '$2b$10$EIvYf6j0v29R35elZ9gXs.KzlfHy4WJPQAQMHthsMNJYghX.MJ9Su', '2022-11-12 20:59:01.303152');


--
-- Data for Name: usersGuess; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public."usersGuess" VALUES (1, 1, 1, 1);
INSERT INTO public."usersGuess" VALUES (2, 1, 2, 2);
INSERT INTO public."usersGuess" VALUES (4, 2, 2, 4);


--
-- Name: games_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.games_id_seq', 15, true);


--
-- Name: results_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.results_id_seq', 4, true);


--
-- Name: sessions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.sessions_id_seq', 2, true);


--
-- Name: usersGuess_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."usersGuess_id_seq"', 4, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 2, true);


--
-- Name: games games_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.games
    ADD CONSTRAINT games_pkey PRIMARY KEY (id);


--
-- Name: results results_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.results
    ADD CONSTRAINT results_pkey PRIMARY KEY (id);


--
-- Name: sessions sessions_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_pkey PRIMARY KEY (id);


--
-- Name: sessions sessions_token_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_token_key UNIQUE (token);


--
-- Name: usersGuess usersGuess_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."usersGuess"
    ADD CONSTRAINT "usersGuess_pkey" PRIMARY KEY (id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: users users_username_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_username_key UNIQUE (username);


--
-- Name: results results_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.results
    ADD CONSTRAINT "results_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- Name: sessions sessions_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT "sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- Name: usersGuess usersGuess_gameId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."usersGuess"
    ADD CONSTRAINT "usersGuess_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES public.games(id);


--
-- Name: usersGuess usersGuess_resultId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."usersGuess"
    ADD CONSTRAINT "usersGuess_resultId_fkey" FOREIGN KEY ("resultId") REFERENCES public.results(id);


--
-- Name: usersGuess usersGuess_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."usersGuess"
    ADD CONSTRAINT "usersGuess_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

