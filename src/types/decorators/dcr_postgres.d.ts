import { FastifyInstance } from "fastify";
import core_postgress from "../../core/db/core_postgres";

type Dcr_FastifyInstance<T>  =  T  &{ psg: core_postgress }

