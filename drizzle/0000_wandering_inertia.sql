CREATE TABLE "companion" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "companion_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"icon" varchar NOT NULL,
	"name" varchar NOT NULL,
	"topic" varchar NOT NULL,
	"time" integer NOT NULL,
	"course" varchar NOT NULL,
	"style" varchar NOT NULL,
	"createdAT" timestamp with time zone DEFAULT now()
);
